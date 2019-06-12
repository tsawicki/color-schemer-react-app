import React, { Component } from "react";
import ColorPalette from "./ColorPalette";
import Header from "./Header";
import Footer from "./Footer";
import PaletteGenerator from "../utils/paletteGenerator";
import './css/ColorSchemer.css';

class ColorSchemer extends Component {

  constructor(props) {
    super(props);

    let colorsList;
    let colorsNumber;

    // TODO: check if hash is valid hex list...
    if(window.location.hash){
      colorsList = this.loadPalleteFromURL();
      colorsNumber = colorsList.length;
    }else{
      colorsNumber = localStorage.getItem("colorsNumber") || 5
      colorsList = this.getRandomPallete(colorsNumber);
    }
    this.state = {colorsNumber: colorsNumber, colorsList: colorsList};
  }
  
  getRandomPallete = (colorsNumber) => {
    const paletteGenerator = new PaletteGenerator();
    const colorsList = paletteGenerator.getRandomColorPalette(colorsNumber)
    return colorsList;
  }

  setRandomPallete = () => this.setState({ colorsList: this.getRandomPallete(this.state.colorsNumber)})

  loadPalleteFromURL = () => {
    let colorsList = window.location.hash.replace(/#/g, '').split("-").map((e)=>{return "#" + e.toUpperCase()});
    return colorsList;
  }

  savePalleteToURL = () => window.location.hash = this.state.colorsList.reduce((urlHash, color) => (urlHash + "-" + color).toUpperCase());

  render() {
    this.savePalleteToURL();
    return (
      <div id="ColorSchemer">
        <Header/>
        <ColorPalette colorsList={this.state.colorsList} />
        <Footer setRandomPalleteBtnClick={this.setRandomPallete}/>
      </div>
    );
  }
}

export default ColorSchemer;
