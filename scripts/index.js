
 $(window).scroll(function () {
    if ($(this).scrollTop() > 572) {
        $('.navbar').css("background", "#0040FF")
     } else {
         $('.navbar').css("background-image", "linear-gradient(to right,#5882FA,#0000FF)")
         $('.navbar').css("background", "rgba(0,0,0,0.2)")
     }
});
