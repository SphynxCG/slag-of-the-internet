function highlightActiveTab() {
  var pathName = window.location.pathname;
  
  var current = pathName.split("/");

  if(current[1] === '') {
    document.getElementsByClassName("navbar-brand")[0].className += ' active';
  } else if(current[1] === 'make') {
    document.getElementsByClassName("nav-make")[0].className += ' active';
  } else if(current[1] === 'move' || current[1] === 'js') {
    document.getElementsByClassName("nav-move")[0].className += ' active';
  } else if(current[1] === 'sabio') {
    document.getElementsByClassName("nav-sabio")[0].className += ' active';
  }
}