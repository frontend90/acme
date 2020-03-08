/********************   WOW      **************/
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

/********************    accordion     ***********************/
$('.accordion-panel-title').click(function () {
  $(this).toggleClass('show').next().slideToggle();
  $('.accordion-panel-title').not(this).removeClass('show').next().slideUp();
});

/************    our-clients slick    **************/
$('.our-clients-slider').slick({
  prevArrow: $('.our-clients-slider-left'),
  nextArrow: $('.our-clients-slider-right'),
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1
});