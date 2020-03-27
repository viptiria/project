$("a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top - 80
  },1500)
  
 })