$(function(){
       $('.blog-singlepost').each(function() {
           $(this).css('background', 'url(' + $(this).attr ('data-background') + ') center / cover no-repeat');
       });

       $('.main-nav_hamburger').click(function() {
         var xsMenu = $('.navbar-xs');

         xsMenu.toggle();
       });
});
