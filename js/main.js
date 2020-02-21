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
    $('.blog-button').click(function (event) {
      event.preventDefault();
      var get_id = this.id;
      var get_current = $('.panel .block' + get_id);
      $('.panel .block')
      if (not(get_current)) {
        removeClass('blog-open');
      } else {
        get_current.addClass('blog-open');
        console.log(this.id);
      }
    });
  });


  var header = document.getElementById("blog-nav");
  var btns = header.getElementsByClassName("blog-button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("blog-active");
      current[0].className = current[0].className.replace(" blog-active", "");
      this.className += " blog-active";
    });
  }