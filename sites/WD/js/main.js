$(function () {
$('.burger').on('click', function (e){
  e.preventDefault()
  $('.header__top-nav').toggleClass('header__top-nav--open')
  $('.burger').toggleClass('burger--open')
})
});
