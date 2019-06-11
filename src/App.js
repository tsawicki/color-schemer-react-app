import React from 'react';
import chroma from 'chroma-js';
import ColorBlock from "./components/ColorBlock";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './App.css';

function App() {
  
  const steps = 5;
  var colorsPallete;

  function createRandomPalette(){
    const firstColor = Math.floor(Math.random()*16777215);
    const lastColor = Math.floor(Math.random()*16777215);
    colorsPallete = chroma.scale([firstColor, lastColor]).mode('lch').colors(steps);
    updateURL();
  }

  function updateURL(){
    var urlHash = colorsPallete.reduce((urlHash, color) => urlHash + "-" + color.toUpperCase())
    window.location.hash = urlHash;
  }

  // refresh page using spacebar key
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      window.location.hash = "";
      window.location.reload();
    }
  }

  // load pallete from URL or get random palette
  if(window.location.hash){
    colorsPallete = window.location.hash.replace(/#/g, '').split("-");
    colorsPallete = colorsPallete.map((e)=>{return "#" + e.toUpperCase()});
  }else{
    createRandomPalette()
  }
  
  return (
    <div className="App">
      <div className="optionsPanel">Color<b>Schemer</b></div>
      <TransitionGroup className="colorBlocksWrapper">
        {colorsPallete.map((colorBlock, index) => {
          return (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="item"
            >
              <ColorBlock color={colorBlock} key={index}></ColorBlock>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  );
}

export default App;
