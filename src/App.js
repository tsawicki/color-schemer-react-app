import React from 'react';
import ColorPalette from "./components/ColorPalette";
import Header from "./components/Header";
import './App.css';

function App() {

  // refresh page using spacebar key
  document.body.onkeyup = function(e){
    if(e.keyCode === 32){
      window.location.hash = "";
      window.location.reload();
    }
  }

  return (
    <div className="App">
      <Header/>
      <ColorPalette/>
    </div>
  );
}

export default App;
