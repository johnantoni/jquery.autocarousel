$(document).ready(function () {

  // in reality do this in css, but we're being super-quick
  $(".quick-carousel").css("visibility", "hidden")

  // init your carousel, no controls, alternates every 5 seconds
  $(".quick-carousel").jCarouselLite({
      auto: "5"
  });

  // set element sizing, again, super-quick
  $(".quick-carousel").css("width", "226px").css("height", "280px");
  
  // fade it in
  $(".quick-carousel").fadeIn();

});