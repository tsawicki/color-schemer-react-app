import React, { Component } from "react";
import './css/ColorBlock.css';

class ColorBlock extends Component {
  render() {
    const color = this.props.color.toUpperCase() || "black";
    const style = {transitionDelay: this.props.delay+"ms", backgroundColor: color}
    return (
      <div className="colorblock" style={style}>
        <p className="colorname">{color}</p>
      </div>
    );
  }
}

export default ColorBlock;
