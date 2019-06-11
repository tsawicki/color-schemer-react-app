import React, { Component } from "react";
import ColorPalette from "./ColorPalette";
import Header from "./Header";
import Footer from "./Footer";
import './css/ColorSchemer.css';

class ColorSchemer extends Component {

  constructor(...props) {
    super(...props);
    document.body.onkeyup = (e) => {
      if(e.keyCode === 32){
        this.refreshWindow();
      }
    }   
    const colorsNumber = localStorage.getItem("colorsNumber") || 5
    this.state = {colorsNumber: colorsNumber};
    // localStorage.setItem("colorsNumber", JSON.stringify(this.state.colorsNumber));
  }

  refreshWindow(){
    window.location.hash = "";
    window.location.reload();
  }

  render() {
    return (
      <div id="ColorSchemer">
        <Header/>
        <ColorPalette colorsNumber={this.state.colorsNumber} />
        <Footer/>
      </div>
    );
  }
}

export default ColorSchemer;
