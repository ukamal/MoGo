/**
 * Created by kamalhossen on 1/9/17.
 */

$('#mogo-slider').carousel({
    interval: 3000
});


$('#jonedeo-cerousel').carousel({
    interval: 2000
});

(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
});


//*scrollup*//
$(document).ready(function() {



      $.scrollUp();
});
