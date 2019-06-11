import React, { Component } from "react";

class Header extends Component {

  resetColorPalette(){
    window.location.hash = "";
    window.location.reload();
  }

  render() {
    return (
      <div className="optionsPanel">
        <img src="./favicon/favicon-32x32.png"/>COLOR <b>SCHEMER</b>
        <span><a href="#" className="btn btn-main" onClick={this.resetColorPalette}>get random palette</a></span>
      </div>
    );
  }
}

export default Header;
