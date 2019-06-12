import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import ColorBlock from "./ColorBlock";
import './css/ColorPalette.css';

class ColorPalette extends Component {

  render() {
    var delay_jump = 100;
    return (
      <div className="colorPalette">
        {this.props.colorsList.map((colorBlock, index) => {
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
