import React, { Component } from "react";
import chroma from 'chroma-js';
import ColorBlock from "./ColorBlock";

class ColorPalette extends Component {

  constructor(...props) {
    super(...props);
    const steps = 5;
    let colorsPallete;
    // load pallete from URL or get random palette
    if(window.location.hash){
      colorsPallete = window.location.hash.replace(/#/g, '').split("-");
      colorsPallete = colorsPallete.map((e)=>{return "#" + e.toUpperCase()});
      this.state = { colorsPallete: colorsPallete, colorsPalleteReady: true, steps: steps };
    }else{
      colorsPallete = this.getRandomColorPalette(steps)
      this.state ={ colorsPallete: colorsPallete, colorsPalleteReady: true, steps: steps};
    }
    this. updateURL();
  }

  getRandomColorPalette(steps){
    let colorsPallete;
    let firstColor = Math.floor(Math.random()*16777215);
    let lastColor = Math.floor(Math.random()*16777215);
    while(chroma.contrast(firstColor, lastColor)<4){
      lastColor = Math.floor(Math.random()*16777215);
    }
    colorsPallete = chroma.scale([firstColor, lastColor]).mode('lch').colors(steps);;;
    return colorsPallete;
  }

  updateURL(){
    const colorsPallete = this.state.colorsPallete;
    var urlHash = colorsPallete.reduce((urlHash, color) => urlHash + "-" + color.toUpperCase())
    window.location.hash = urlHash;
  }

  render() {
    if(this.state.colorsPallete){
      return (
        <div className="colorBlocksWrapper">
          {this.state.colorsPallete.map((colorBlock, index) => {
            return (
               <ColorBlock color={colorBlock} key={index}></ColorBlock>
            )
          })}
        </div>
      );
    }else{
      return(<p>"loading..."</p>);
    }
  }
}

export default ColorPalette;
