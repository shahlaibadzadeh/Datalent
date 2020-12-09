$(document).ready(function(){
    $('.items.company-items').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
        }
        },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    });
    });