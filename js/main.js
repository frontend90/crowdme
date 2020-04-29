/*********************  плавный скролл    ***************/
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

/************    header slick    **************/
$('.header-slider').slick({
  prevArrow: $('.header-arrow-left'),
  nextArrow: $('.header-arrow-right'),
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1
});

/*-------------     modal windows   -------------*/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
  $('body').addClass('no-scroll');
});

$('.close').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.login-modal');

  modalParent.removeClass('show');
  $('body').removeClass('no-scroll');
});

/*-------------     work (фильтр block-nav)   -------------*/
$(function () {
  $('.block2-nav button').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.block2-content .block.' + get_id);
    $('.block2-content .block').not(get_current).hide(100);
    get_current.show(100);
  });
});

/*-------------  work (block-active button)   -------------*/
var header = document.getElementById("active-nav");
var btns = header.getElementsByClassName("block-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("block-active");
    current[0].className = current[0].className.replace(" block-active", "");
    this.className += " block-active";
  });
}

/***************     burger        ***********/
$('.burger').click(function () {
  $('.menu-link').toggleClass('show');
});
$('.menu-link a').click(function () {
  $('.menu-link').removeClass('show');
});