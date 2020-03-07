wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0 // default
})
wow.init();

/*********************  плавный скролл    **************/
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

/***************      login-modal    **************/
$('.link a').click(function () {
  $('.login-modal').addClass('show');
  $('body').addClass('no-scroll');
});

$('.close .fas').click(function () {
  $('.login-modal').removeClass('show');
  $('body').removeClass('no-scroll');
});