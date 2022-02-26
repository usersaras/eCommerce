$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop: true,
        responsive:{
            0:{
                items: 1,
                stagePadding: 10,
                nav: false
                
            },
            600:{
                items: 2
            },
            1000:{
                items: 4
            }

        }
    });
  });