(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
$('.click').click(function(e){
  // prevent default action
  e.preventDefault();
  
  // get id of target div (placed in href attribute of anchor element)
  // and pass it to the scrollToElement function
   // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
  scrollToElement( $(this).attr('href'), 1000 );
});

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

