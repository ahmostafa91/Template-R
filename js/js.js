/*global $, alert, console*/

$(document).ready(function () {
    
    'use strict';
    
    // Adjust Header Height
    
    // nice scroll
    
    $("html").niceScroll();
    
    // carousel
    
    $('.carousel').carousel({
        
        interval: 3000
    });
    
    // show tool box on click
    
    $(".check").click(function () {
        
        $(".color").fadeToggle(800);
    });
    
    // change color
    
    var colorLi = $(".color ul li"),
        scroll = $("#scroll"); // for scroll function

    colorLi
        
        .eq(0).css("backgroundColor", "#e41817").end()
        .eq(1).css("backgroundColor", "rgba(228, 219, 23, 0.76)").end()
        .eq(2).css("backgroundColor", "rgba(93, 228, 23, 0.84)").end()
        .eq(3).css("backgroundColor", "rgba(33, 171, 209, 0.89)").end()
        .eq(4).css("backgroundColor", "rgba(105, 40, 208, 0.87)");
    
    colorLi.click(function () {
        
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
        
        // console.log($(this).attr("data-value"))
    });
    
    // scroll top
    
    
    $(window).scroll(function () {
        
        console.log($(this).scrollTop());
        
        if ($(this).scrollTop() >= 700) {
            
            scroll.fadeIn(800);
            
        } else {
            
            scroll.fadeOut(800);
        }
        
        // $(this).scrollTop()>=700 ? scroll.fadeIn() : scroll.fadeOut(); (if condition shortcut)
    });
    
    scroll.click(function () {
        
        $('html, body').animate({scrollTop: 0}, 800);
        
    });
});


$(window).on("load", function () {
    
    'use strict';
    
    $(".overlay .sk-fading-circle").fadeOut(600, function () {
        
        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(600, function () {
            
            $(this).remove();
        });
    });
});









/* $('.login').toggle(
    function(){
        $('#panel').animate({
            height: "150", 
            padding:"20px 0",
            backgroundColor:'#000000',
            opacity:.8
        }, 500);
        $('#otherdiv').animate({
            //otherdiv properties here
        }, 500);
    },
    function(){
        $('#panel').animate({
            height: "0", 
            padding:"0px 0",
            opacity:.2
        }, 500);     
        $('#otherdiv').animate({
            //otherdiv properties here
        }, 500);
}); */