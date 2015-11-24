function randomColor() {
  return Math.floor(Math.random() * 255);
}

var square = {};

square.separator = "-";
square.number = 0;

function createSquare() {
  var div = document.createElement("div");
  div.setAttribute("class", "square" + " ");
  var squareSelector = "square" + square.separator + square.number;
  div.className += squareSelector;
  div.style.backgroundColor = "rgb(" + randomColor() + "," + randomColor()+ "," + randomColor();
  console.log(div.style.backgroundColor);
  var space = document.getElementsByClassName("square-holder")[0];
  space.appendChild(div);
  square.number++;
}

