import React, { Component } from "react";
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="./logo.png" className="logo" alt="logo"/>
      </div>
    );
  }
}

export default Header;
