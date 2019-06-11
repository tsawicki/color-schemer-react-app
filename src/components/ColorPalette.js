import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import ColorBlock from "./ColorBlock";
import PaletteGenerator from "../utils/paletteGenerator";
import './css/ColorPalette.css';

class ColorPalette extends Component {

  constructor(...props) {
    super(...props);
    const colorsNumber = this.props.colorsNumber;
    let colorsPallete;
    // load pallete from URL or get random palette
    if(window.location.hash){
      colorsPallete = window.location.hash.replace(/#/g, '').split("-");
      colorsPallete = colorsPallete.map((e)=>{return "#" + e.toUpperCase()});
    }else{
      const paletteGenerator = new PaletteGenerator();
      colorsPallete = paletteGenerator.getRandomColorPalette(colorsNumber)
    }
    this.state ={ colorsPallete: colorsPallete, colorsNumber: colorsNumber};
  }

  componentDidMount(){
    window.location.hash = this.state.colorsPallete.reduce((urlHash, color) => (urlHash + "-" + color).toUpperCase())
  }

  render() {
    var delay_jump = 100;
    return (
      <div className="colorPalette">
        {this.state.colorsPallete.map((colorBlock, index) => {
          return (
            <CSSTransition in={true} appear={true} timeout={500+(delay_jump*index)} classNames="fade" key={index}>
              <ColorBlock color={colorBlock} key={index} delay={delay_jump*index}/>
            </CSSTransition>
          )
        })}
      </div>
    );
  }
}

export default ColorPalette;
