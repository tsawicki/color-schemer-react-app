import React, { Component } from "react";
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <button type="button" className="btn" onClick={this.props.setRandomPalleteBtnClick}><i className="fas fa-sync-alt"></i> <span>get fresh palette</span></button>
      </div>
    );
  }
}

export default Footer;
