(function () {
    "use strict";
  
    $(function () {
      $(".menu-container").load("menu.html");
      $(".links").load("links.html");
      $(".footer").load("footer.html");
      $(".fade").delay(5).animate({"opacity": "1"}, 500);
    });
  })();