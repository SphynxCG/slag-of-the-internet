<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="robots" content="noindex,nofollow">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href=""/favicon.ico"">

    <title>Slag of the Internet</title>

    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/includes-header.php";
      include($path);
    ?>
    
    <link href="/style/colorSquares.css" rel="stylesheet">
    
    <script src="/script/colorSquares.js"></script>
    
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
          <h1>Color Squares</h1>
          <div class="square-holder">
            <script>
              getHolderWidth();
              getNumberOfSquaresWide();
              getSquareSize();

              // for ( i = 0 ; i < numberOfSquares; i++ ) {
                // for ( j = 0 ; j < numberOfSquares; j++ ) {
                  // createSquare();
                // }
              // }
              
              for( i = 0; i < numberOfSquaresWide; i++ ) {
                for( j = 0; j < numberOfSquaresWide; j++ ) {
                  createSquare();
                }
                square.number[0]++;
                square.number[1] = 0;
              }
              
              setTimeout(30000);
              
              isSameAs(0,0);

            </script>
          </div>
        </div>
      </div>
    </div>

    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/includes-footer.php";
      include($path);
    ?>

  </body>
</html>


