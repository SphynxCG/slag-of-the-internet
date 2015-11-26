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


var square = {};

square.separator = "-";
square.number = 0;
square.colors = [];

function setColors() {
  for( i = 0; i < numberOfColors; i++) {
    square.colors[i] = "rgb(" + randomColor() + "," + randomColor()+ "," + randomColor() + ")";
  }
}

setColors();

function createSquare() {
  var div = document.createElement("div");
  div.setAttribute("class", "square" + " ");
  
  var squareSelector = "square" + square.separator + square.number;
  div.className += squareSelector;

  div.style.width = squareSize + "px";
  div.style.height = squareSize + "px";
  div.style.backgroundColor = square.colors[ ( Math.ceil( Math.random() * numberOfColors ) ) - 1];
  
  var space = document.getElementsByClassName("square-holder")[0];
  space.appendChild(div);
  square.number++;
}

function getBackgroundColor(e) {
  return window.getComputedStyle(document.getElementsByClassName("square-" + e)[0]).getPropertyValue("background-color");
}

function sameStyle(i, j) {
  if (getBackgroundColor(i) === getBackgroundColor(j)) {
    return true;
  } else {
    return false;
  }
}

function areAllSame() {
  var counter = 0;
  for( i = 0; i < square.number; i++) {
    console.log(window.getComputedStyle(document.getElementsByClassName("square-" + i)[0]).getPropertyValue("background-color"));
     for( j = i + 1; j < square.number * 2; j++ ) {
        if (sameStyle(i, j)) {
          console.log("same")
        } else {
          console.log("not same");
        }
        counter++;
        console.log(counter);
     }
  }
}
