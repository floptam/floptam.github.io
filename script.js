
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        if (!document.getElementsByClassName("menu__inner")[0].classList.contains("menu__open")){
            document.getElementsByClassName("menu__inner")[0].style.display = 'block';
        $('.menu__inner').addClass('menu__open');
        } else{
            document.getElementsByClassName("menu__inner")[0].classList.remove("menu__open");
            document.getElementsByClassName("menu__inner")[0].style.display = 'none';
        }
      });
      $('.menu__item').on('click', function() {
        if (window.matchMedia('(max-width: 767px)').matches) {
          document.getElementsByClassName("menu__inner")[0].style.display = 'none';
          document.getElementsByClassName("menu__inner")[0].classList.remove("menu__open");
      }
       
    });
    });

/* reviews*/

 let slider = $("#reviewsSlider");
slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

  })(jQuery);

  $(window).resize(function(){
    if (window.matchMedia('(min-width: 768px)').matches) {
        document.getElementsByClassName("menu__inner")[0].style.display = 'flex';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
        document.getElementsByClassName("menu__inner")[0].style.display = 'none';
    }
});