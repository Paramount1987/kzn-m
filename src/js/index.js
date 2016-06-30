;(function($){

   //-------------------------------scroll pane
      $('document').ready(function(){

         $('.scroll-pane').jScrollPane();
         $('#kzn-preloader').fadeOut();//-preloader

         $(window).resize(function(){
            $.each( $('.scroll-pane'), function(){
               var api = $(this).data('jsp');
               api.reinitialise();
            });
         });
      });
   //-------------------------------nav menu
      var nav = {
         nav: 'nav',
         btnOpen: '.btn-menu',
         btnClose: '.btn-nav-close',
         navBackdrop: '.nav-backdrop',
         init: function(){
            this.btnOpenHandler();
            this.btnCloseHandler();
         },
         openNav: function(){
            $(this.nav).addClass('open');
         },
         closeNav: function(){
            $(this.nav).removeClass('open');
         },
         btnOpenHandler: function(){
            var that = this;
            $('body').on('click', this.btnOpen, function(e){
               e.preventDefault();
               that.openNav();
            });
         },
         btnCloseHandler: function(){
            var that = this;
            $('body').on('click', this.btnClose, function(e){
               e.preventDefault();
               that.closeNav();
            });
            $('body').on('click', this.navBackdrop, function(){
               that.closeNav();
            });
         }
      };

      nav.init();
   //-------------------------------search btn
      var search = {
         btnOpen: '.btn-search',
         btnClose: '.js-close-search',
         container: '.search-group',
         init: function(){
            this.btnOpenHandler();
            this.btnCloseHandler();
         },

         openSearch: function(){
            $(this.container).addClass('open');
         },

         closeSearch: function(){
            $(this.container).removeClass('open');
         },

         btnOpenHandler: function(){
            var that = this;
            $('body').on('click', this.btnOpen, function(e){
               e.preventDefault();
               that.openSearch();
            });
         },

         btnCloseHandler: function(){
            var that = this;
            $('body').on('click', this.btnClose, function(e){
               e.preventDefault();
               that.closeSearch();
            });
         }
      };

      search.init();
   //-----------------------------------------------------

}(jQuery));