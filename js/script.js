$(document).ready(function(){
  $('#nav li ul').css({
    display: "none",
    left: "auto"
  });
  $('#nav li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});
// JavaScript Document