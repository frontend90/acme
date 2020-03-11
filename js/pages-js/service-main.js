wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0 // default
})
wow.init();

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

/************    service-content (service-header) slick    **************/
$('.service-slider').slick({
  prevArrow: $('.service-slider-left'),
  nextArrow: $('.service-slider-right'),
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true 
});

/************    service-work slick    **************/
$('.service-work-slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 2
});