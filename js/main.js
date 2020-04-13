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
  slidesToScroll: 1,
  autoplay: true
});