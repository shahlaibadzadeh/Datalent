$(document).ready(function(){

    $('.items.alumni-testimonial-items').slick({
    infinite: true,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    waitForAnimate: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
        }
        },
    {
        breakpoint: 660,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
        },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    }
    }
    
    ]
    });
    });