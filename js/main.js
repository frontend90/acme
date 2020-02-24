  /*******    blog slick    **************/
  $('.blog-slider').slick({
    prevArrow: $('.blog-slider-left'),
    nextArrow: $('.blog-slider-right'),
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

  /*********    blog panel    *****************/
  $(function () {
    $('.panel .btn').on('click', 'button:not(.active)', function () {
      $(this)
        .addClass('blog-active').siblings().removeClass('blog-active')
        .closest('div.panel').find('div.block').removeClass('blog-active').eq($(this).index()).addClass('blog-active');
    });
  });

  /************    work slick    **************/
  $('.work-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2
  });

  /************    clients slick    **************/
  $('.clients-slider').slick({
    prevArrow: $('.clients-slider-left'),
    nextArrow: $('.clients-slider-right'),
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1
  });

  /**************      WOW       ***********/
  new WOW().init();

  /*********************  плавный скролл    *********/
  $(document).ready(function () {
    $('a[href^="#"]').click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;
      if ($.browser) {
        $('body').animate({
          scrollTop: destination
        }, 1000);
      } else {
        $('html').animate({
          scrollTop: destination
        }, 1000);
      }
      return false;
    });
  });