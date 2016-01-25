function randomColor() {
  return Math.floor(Math.random() * 255);
}

var holderWidth;

function getHolderWidth() {
  holderWidth = document.getElementsByClassName("square-holder")[0].offsetWidth;
}

var numberOfSquares;

function getNumberOfSquaresWide() {
  numberOfSquaresWide = prompt("how many squares wide?", "");
}

var squareSize;

function getSquareSize() {
  squareSize = (holderWidth / numberOfSquaresWide);
}

var numberOfColors;

function getNumberOfColors() {
  numberOfColors = prompt("how many colors?", "");
}

getNumberOfColors();


var square = {};

square.separator = "-";
square.number = [0, 0];
square.colors = [];

function setColors() {
  for( i = 0; i < numberOfColors; i++) {
    square.colors[i] = "rgb(" + randomColor() + "," + randomColor()+ "," + randomColor() + ")";
  }
}

setColors();

function changeSquareColor( ref0, ref1 ) {
  alert("changing");
  document.getElementsByClassName("square-" + ref0 + "-" + ref1)[0].style.backgroundColor = square.colors[ ( Math.ceil( Math.random() * numberOfColors ) ) - 1];
}

// function createSquare() {
  // var div = document.createElement("div");
  // div.setAttribute("class", "square" + " ");
//   
  // var squareSelector = "square" + square.separator + square.number;
  // div.className += squareSelector;
// 
  // div.style.width = squareSize + "px";
  // div.style.height = squareSize + "px";
  // div.style.backgroundColor = square.colors[ ( Math.ceil( Math.random() * numberOfColors ) ) - 1];
//   
  // var space = document.getElementsByClassName("square-holder")[0];
  // space.appendChild(div);
  // square.number++;
// }

function createSquare() {
  var div = document.createElement("div");
  div.setAttribute("class", "square" + " ");
  
  var squareSelector = "square" + square.separator + square.number[0] + square.separator + square.number[1];
  div.className += squareSelector;

  div.style.width = squareSize + "px";
  div.style.height = squareSize + "px";
  div.style.backgroundColor = square.colors[ ( Math.ceil( Math.random() * numberOfColors ) ) - 1];
  
  var space = document.getElementsByClassName("square-holder")[0];
  space.appendChild(div);
  square.number[1]++;
}

function getBackgroundColor(e0, e1) {
  return window.getComputedStyle(document.getElementsByClassName("square-" + e0 + "-" + e1)[0]).getPropertyValue("background-color");
}

function sameStyle(i0, i1, j0, j1) {
  if (getBackgroundColor( i0, i1 ) === getBackgroundColor( j0, j1 )) {
    return true;
  } else {
    changeSquareColor(j0, j1);
    sameStyle(i0, i1, j0, j1);
  }
}

function isSameAs(ref0, ref1) {
  for ( a = 0; a < numberOfSquaresWide; a++ ) {
    for ( b = 0 ; b < numberOfSquaresWide; b++ ) {
      console.log("square-" + ref0 + "-" + ref1);
      console.log("square-" + a + "-" + b);
      sameStyle(ref0, ref1, a, b);
    }
  }
}

// function areAllSame() {
  // var counter = 0;
  // for( i = 0; i < numberOfSquaresWide; i++) {
     // for( j = i + 1; j < numberOfSquaresWide * 2; j++ ) {
       // console.log(window.getComputedStyle(document.getElementsByClassName("square-" + i + "-" + j)[0]).getPropertyValue("background-color"));
        // if (sameStyle(i, j)) {
          // console.log("same")
        // } else {
          // console.log("not same");
        // }
        // counter++;
        // console.log(counter);
     // }
  // }
// }
