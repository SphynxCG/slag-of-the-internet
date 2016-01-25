var sabio = {
    layout: {}
    , page: {
        handlers: {}
    , startUp: null
    }
    , services: {
        notes: {}
    }
};

sabio.page.handlers.flipMenuGlyphicon = function(from) {
  
  from = from + " > h3 > span.glyphicon";

  $(".sabio-javascript > h3 > span.glyphicon").removeClass("glyphicon-menu-down");
  
};

sabio.page.handlers.toggleContent = function(selector) {
  
  sabio.page.handlers.flipMenuGlyphicon(selector);
  
  $(selector).toggleClass("hidden");
  
};

sabio.layout.startUp = function() {
  
  if (sabio.page.startUp) {
    console.debug("sabio.layout.startUp fired and found sabio.page.startUp");
    sabio.page.startUp();
  }
  
  $(".sabio-javascript > h3 > span.glyphicon").on("click", function() {
    
    $(".sabio-javascript").children(".notes").toggleClass("hidden");
    
    $(this).toggleClass("glyphicon-menu-down glyphicon-menu-up");
    
  });
  
};

$(document).ready(sabio.layout.startUp);
