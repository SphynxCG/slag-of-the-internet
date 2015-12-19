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
    <link rel="icon" href="/favicon.ico">

    <title>Slag of the Internet</title>

    <?php
      $path = $_SERVER['DOCUMENT_ROOT'];
      $path .= "/inc/includes-header.php";
      include($path);
    ?>
    
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
          <h1>PHP</h1>
          <h4>Here are some of the things my computer knows about your computer:</h4>
        </div>
        <div class="row">
          <h5>HTTP_USER_AGENT: <?php echo $_SERVER['HTTP_USER_AGENT']?></h5>
          <h5>REMOTE_ADDR: <?php echo $_SERVER['REMOTE_ADDR']?></h5>
          <h5>REMOTE_PORT: <?php echo $_SERVER['REMOTE_PORT']?></h5>
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

  </body>
</html>


