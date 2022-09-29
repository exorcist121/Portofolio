$(function () {
  $('.burger__nav,.overlay').on('click', function (e){
    e.preventDefault()
    $('.header__burger-inner').toggleClass('header__burger-inner--open')
    $('.burger__nav').toggleClass('burger__nav--open')
    $('.header__logo').toggleClass('header__logo--open')
    $('.overlay').toggleClass('overlay--show')
  })
Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: [
      "close",
    ],
  },
});
var mixer = mixitup('.products__categories');
  $('.products__buttons-item').on('click', function () {
    $('.products__buttons-item').removeClass('products__buttons-item--active')
    $(this).addClass('products__buttons-item--active')
  });
  })

