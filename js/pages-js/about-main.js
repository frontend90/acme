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

$(function () {
  $('.btn-dropdown').on('click', function () {
    $(this)
      .toggleClass('show').siblings().removeClass('show')
      .closest('.btn-group').find('.dropdown-content').removeClass('show').eq($(this).index()).toggleClass('show');
  });
});

/************    about-content slick    **************/
$('.about-slider').slick({
  prevArrow: $('.about-slider-left'),
  nextArrow: $('.about-slider-right'),
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1
});