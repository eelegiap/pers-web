(function () {
    "use strict";
  
    $(function () {
      $(".menu-container").load("menu.html");
      $(".fade").delay(5).animate({"opacity": "1"}, 500);
    });
  })();