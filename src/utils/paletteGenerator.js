import chroma from 'chroma-js';

class PaletteGenerator{
  getRandomColorPalette(colorsNumber){
    let colorsPallete;
    let firstColor = Math.floor(Math.random()*16777215);
    let lastColor = Math.floor(Math.random()*16777215);
    while(chroma.contrast(firstColor, lastColor)<4){
      lastColor = Math.floor(Math.random()*16777215);
    }
    colorsPallete = chroma.scale([firstColor, lastColor]).mode('lch').colors(colorsNumber);;;
    return colorsPallete;
  }
}

export default PaletteGenerator;
