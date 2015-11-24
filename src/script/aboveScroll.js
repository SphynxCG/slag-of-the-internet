function highlightActiveTab() {
  var pathName = window.location.pathname;
  
  var current = pathName.split("/");

  if(current[1] === 'index.php' || current[1] === '') {
    document.getElementsByClassName("nav-home")[0].className += ' active';
  } else if(current[1] === 'php.php' || current[1] === 'php') {
    document.getElementsByClassName("nav-php")[0].className += ' active';
  } else if(current[1] === 'js.php' || current[1] === 'js') {
    document.getElementsByClassName("nav-js")[0].className += ' active';
  }
}

function fullName(firstName, lastName, callback) {
	console.log("My name is " + firstName + " " + lastName);

	if(typeof(callback) === 'function') {
		callback(lastName);	
	}
}

var greeting = function(ln) {
	console.log("Welcome Mr. " + ln);
}

//fullName("Jackie", "Chan", greeting);

function publish(item, author, callback) {
  console.log(item);
  var date = new Date();
  
  if( typeof(callback) === 'function') {
    callback(author, date);
  }
}

function messages(author, time) {
  var sendTime = time.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
}

function articles(author, date) {
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published " + pubDate);
}

publish("How are you?", "Monique", messages);

publish("10 Tips for Javascript Developers", "Jane Doe", articles);
