$(document).ready(function(){
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -110
        }, 1000);
        return false;
      }
    }
  });
});

		
$(".read-more-external").mouseenter( function(){
	$(".animate-external-icon").addClass("animated shake animate-external")
});	
$(".read-more-external").mouseleave( function(){
	$(".animate-external-icon").removeClass("animated shake animate-external")
});	
});