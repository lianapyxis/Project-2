/*
menu.onclick = function myFunction() {
    document.querySelector(".topnav").classList.toggle("responsive");
}
*/
jQuery(function ($) {
    var header = $("#menu")

    function dropDown() {   

            if ($(".topnav a").is(":hidden")) {
                $(".topnav").addClass("responsive");
                $(".topnav a").addClass("responsive");
                $(".topnav").animate({height: '300px'}, 'slow')
                $(".topnav a").animate({
                    display: 'block',
                    textAlign: 'right',
                    float: 'right'
                },"slow");
            } else {
                $(".topnav").removeClass("responsive");
                $(".topnav a").removeClass("responsive");
                $(".topnav").animate({height: '47px'}, 'slow')
                $(".topnav .icon").prevAll().animate({
                    display: 'none'
                },"slow");
            }
    }

    header.click(dropDown);
});
