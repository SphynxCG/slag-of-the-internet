function randomColor() {
  return Math.floor(Math.random() * 255);
}

var holderWidth;

function getHolderWidth() {
  holderWidth = document.getElementsByClassName("square-holder")[0].offsetWidth;
}

var numberOfSquares;

function getNumberOfSquares() {
  numberOfSquares = prompt("how many squares wide?", "");
}

var squareSize;

function getSquareSize() {
  squareSize = (holderWidth / numberOfSquares);
}

var numberOfColors;

function getNumberOfColors() {
  numberOfColors = prompt("how many colors?", "");
}

getNumberOfColors();

var squareColors = [];

function setColors() {
  for( i = 0; i < numberOfColors; i++) {
    squareColors[i] = "rgb(" + randomColor() + "," + randomColor()+ "," + randomColor() + ")";
  }
}

setColors();

var square = {};

square.separator = "-";
square.number = 0;

function createSquare() {
  var div = document.createElement("div");
  div.setAttribute("class", "square" + " ");
  
  var squareSelector = "square" + square.separator + square.number;
  div.className += squareSelector;

  div.style.width = squareSize + "px";
  div.style.height = squareSize + "px";
  div.style.backgroundColor = squareColors[(Math.ceil(Math.random() * numberOfColors)) - 1];
  
  var space = document.getElementsByClassName("square-holder")[0];
  space.appendChild(div);
  square.number++;
}


