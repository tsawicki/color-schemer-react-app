class URLHashDecoder{

  static loadPalleteFromURL(){
    const colorsArray = window.location.hash
      .replace(/#/g, '')
      .split("-")
      .filter(e =>{return /[0-9A-Fa-f]{6}/g.test(e)})
      .map((e)=>{return "#" + e.toUpperCase()});
    return colorsArray
  }

  static savePalleteToURL(colorsList){
    window.location.hash = colorsList.reduce((urlHash, color) => (urlHash + "-" + color).toUpperCase());
  }

  static hasValidHash(){    
    if(window.location.hash){
      const colorsList = this.loadPalleteFromURL();
      return (colorsList instanceof Array && colorsList.length > 2)
    }
  }

}

export default URLHashDecoder;
