;(function($){

   //-------------------------------scroll pane
   $('document').ready(function(){

      $('.scroll-pane').jScrollPane();

      $(window).resize(function(){
         $.each( $('.scroll-pane'), function(){
            var api = $(this).data('jsp');
            api.reinitialise();
         });
      });
   });
   //-------------------------------end scroll pane
}(jQuery));