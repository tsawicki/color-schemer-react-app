import React, { Component } from "react";
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
    return (
      <div className="colorPalette">
        {this.state.colorsPallete.map((colorBlock, index) => {
          return (
             <ColorBlock color={colorBlock} key={index}></ColorBlock>
          )
        })}
      </div>
    );
  }
}

export default ColorPalette;
