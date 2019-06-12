import React, { Component } from "react";
import ColorPalette from "./ColorPalette";
import Header from "./Header";
import Footer from "./Footer";
import PaletteGenerator from "../utils/PaletteGenerator";
import URLHashDecoder from "../utils/URLHashDecoder";
import './css/ColorSchemer.css';


class ColorSchemer extends Component {

  constructor(props) {
    super(props);

    let colorPalette;
    let colorsNumber;

    if(URLHashDecoder.hasValidHash()){
      colorPalette = URLHashDecoder.loadPalleteFromURL();
      colorsNumber = colorPalette.length;
    }else{
      colorsNumber = localStorage.getItem("colorsNumber") || 5
      colorPalette = PaletteGenerator.getRandomColorPalette(colorsNumber);
    }
    this.state = {colorsNumber: colorsNumber, colorPalette: colorPalette};
  }
  
  setRandomPallete = () => this.setState({ colorPalette: PaletteGenerator.getRandomColorPalette(this.state.colorsNumber)})

  render() {
    URLHashDecoder.savePalleteToURL(this.state.colorPalette);
    return (
      <div id="ColorSchemer">
        <Header/>
        <ColorPalette colorPalette={this.state.colorPalette} />
        <Footer setRandomPalleteBtnClick={this.setRandomPallete}/>
      </div>
    );
  }
}

export default ColorSchemer;
