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
          <h1>You should not be here. This is a forbidden area.</h1>
          <h4>If you want to continue using this site, turn back now. You will lose everything if you choose to <a href="/bazqux/foobar" rel="nofollow">continue</a>.</h4>
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


