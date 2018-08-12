document.getElementById('menuicon').addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('open');
});

$(document).on('ready', function () {
    $(".multipe-items").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
    });

    $('.variable-width').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
        
      });
      
});

