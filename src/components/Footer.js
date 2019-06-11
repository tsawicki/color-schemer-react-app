import React, { Component } from "react";
import './css/Footer.css';

class Footer extends Component {
  refreshWindow(){
    window.location.hash = "";
    window.location.reload();
  }
  render() {
    return (
      <div className="footer">
        <a href="#" className="btn" onClick={this.refreshWindow}><i className="fas fa-sync-alt"></i> <span>get fresh palette</span></a>
      </div>
    );
  }
}

export default Footer;
