$(function(){
       $('.blog-singlepost').each(function() {
           $(this).css('background', 'url(' + $(this).attr ('data-background') + ') center / cover no-repeat');
       });


    $('.fa-bars').click(function () {
         console.log('hi');
    })
});
