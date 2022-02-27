$(document).ready(function(){
    $(".owl-pro").owlCarousel({
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

  $(document).ready(function(){
    $(".owl-test").owlCarousel({
        dots: true,
        margin: 30,
        loop: true,
        autoplay: false,
        responsive:{
            0:{
                items: 1,
                stagePadding: 10,  
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }

        }
    });
  });