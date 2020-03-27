$(document).ready(function(){
  $('.startpage').height($(window).height() - $('.navbar').height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top - 60
  },1000)
  
 })