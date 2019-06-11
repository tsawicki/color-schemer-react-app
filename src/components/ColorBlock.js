import React, { Component } from "react";
import './css/ColorBlock.css';

class ColorBlock extends Component {
  render() {
    const color = this.props.color.toUpperCase() || "black"
    return (
      <div className="colorblock" style={{backgroundColor: color}}>
        <p className="colorname">{color}</p>
      </div>
    );
  }
}

export default ColorBlock;
