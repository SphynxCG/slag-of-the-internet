function createSquare() {
  var div = document.createElement("div");
  div.setAttribute("class", "square");
  var space = document.getElementsByClassName("squares")[0];
  space.appendChild(div);
}
