$(function () {
  $('.burger__nav,.overlay').on('click', function (e){
    e.preventDefault()
    $('.header__burger-inner').toggleClass('header__burger-inner--open')
    $('.burger__nav').toggleClass('burger__nav--open')
    $('.header__logo').toggleClass('header__logo--open')
    $('.overlay').toggleClass('overlay--show')
  })
  })

