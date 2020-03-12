/*---------------- фильтр portfolio   ---------------*/
$(function () {
  $('.portfolio-nav a').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.content .block.' + get_id);
    $('.content .block').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.content .block').show(500);
  });
});

/*-------------     portfolio-4 modal   -------------*/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
  $('body').addClass('no-scroll');
});

$('.close .fas').click(function () {
  $('.portfolio-4-modal').removeClass('show');
  $('body').removeClass('no-scroll');
});

/********************   WOW      **************/
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0 // default
})
wow.init();

/*********************  плавный скролл   ********************/
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

/***************       portfolio-nav (active)    ***************/
$(function () {
  $('.portfolio-nav a').on('click', function () {
    $(this)
      .addClass('active').siblings().removeClass('active');
  });
});