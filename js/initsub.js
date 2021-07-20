(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var scrollToElement = function(el, ms){
   var speed = (ms) ? ms : 600;
   $('html,body').animate({
       scrollTop: $(el).offset().top
   }, speed);
}

$(document).ready(function() {
  var obj = $("#example");
  obj.animate({
    opacity: 1,
    height: 'show'
  }, 450);
});


$(document).ready(function(){
  $(window).scroll(function(){
      $("#index-banner").css("opacity", 1 - $(window).scrollTop() / ($('#index-banner').height() / 1));
  });
});

