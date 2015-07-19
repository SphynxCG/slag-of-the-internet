  var pathName = window.location.pathname;
  
  var current = pathName.split("/");

  if(current[1] === 'index.php' || current[1] === '') {
    document.getElementsByClassName("nav-home")[0].className += ' active';
  } else if(current[1] === 'php.php' || current[1] === 'php') {
    document.getElementsByClassName("nav-php")[0].className += ' active';
  }