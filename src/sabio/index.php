<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">

    <title>Slag of the Internet</title>

    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/includes-header.php";
      include($path);
    ?>
    
    <link href="/styles/sabio.css" rel="stylesheet">
    
  </head>

  <body>

    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/header.php";
    	include($path);
    ?>
    
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <h1>Sabio</h1>
          <h4>Here some of the things I have learned during my studies at <a href="http://sabio.la/" target="_blank">sabio.la</a>.</h4>
        </div>
        <div class="row sabio-javascript">
          <h3>Javascript &amp; jQuery by Jon Duckett <span class="glyphicon glyphicon-menu-up"></span></h3>
          <div class="notes">
            <br/>
            <h4>Creating an object via literal notation:</h4>
            <p>In the below example, hotel is an <span class="technical">object</span> that is created using literal notation. name, rooms &amp; booked are <span class="technical">properties</span> of said object that consist of a <span class="technical">key: value</span> pair (such as booked: 13). checkAvailability() is a <span class="technical">method</span> which is part of the hotel <span class="technical">object</span>. The keyword <span class="technical">this</span> refers to the context in which the encapsulating function lives - here, it becomes hotel. <span class="technical">properties</span> and <span class="technical">methods</span> are accessed using dot notation or square brackets:</p>
            <pre class="prettyprint">

  var hotel = {
  
    name: "myHotel"
   ,rooms: 40
   ,booked: 13
  
    checkAvailability: function() {
      return this.rooms - this.booked;
    }

  };
  
  //the above code is equivalent to:
  
  var hotel = {}
  
  hotel.name: "myHotel"
  hotel.rooms: 40
  hotel.booked: 13

  hotel.checkAvailability: function() {
    return this.rooms - this.booked;
  };
  
  var hotelName = hotel.name;
  console.log(hotelName);
  //returns "myHotel"
  
  var roomsFree = hotel.checkAvailability();
  console.log(roomsFree)
  //returns 27
  
  hotel.name = "newName";
  var hotelName = hotel['name'];
  console.log(hotelName);
  //returns "newName"
            </pre>
            <br/>
            <h4>Creating an object via constructor notation:</h4>
            <p><span class="technical">Objects</span> can also be created using constructor notation. You can then use dot notation to assign values.</p>
            <pre class="prettyprint">
              
  var hotel = new Object();
  
  hotel.name = "constructedHotel";
  hotel.rooms = 40;
  hotel.booked = 13;
  
  hotel.checkAvailability = function() {
    return this.rooms - this.booked;
  }
            </pre>
            <p>Constructor notation allows for a <span class="technical">function</span> that can then be used to create many similar objects. This makes it easier to create a large number of similar objects, or to define a complex object that needs to be available, but may not actually be used.</p>
            <pre class="prettyprint">

  function Hotel(name, rooms, booked) {
    
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    
    this.checkavailability = function() {
      return this.rooms - this.booked;
    }
  }
  
  //only now are the objects created
  var pasadenaLuxury = new Hotel("Pasadena Luxury Hotel", 350, 200);
  var pasadenaDiscount = new Hotel("Pasadena Motel 8", 50, 23);
            </pre>
          </div>
        </div>
      </div>
    </div>
    
    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/footer.php";
      include($path);
    ?>

    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/includes-footer.php";
      include($path);
    ?>

    <script src="/scripts/sabio.js"></script>
    
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert"></script>
    
    <script>
      sabio.page.startUp = function() {
        console.log("startUp is firing");
      }
    </script>

  </body>
</html>


