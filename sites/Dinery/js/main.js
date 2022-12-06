$(function () {
  $('.burger__nav,.overlay').on('click', function (e){
    e.preventDefault()
    $('.header__nav').toggleClass('header__nav--open')
    $('.burger__nav').toggleClass('burger__nav--open')
    $('.header__logo').toggleClass('header__logo--open')
    $('.overlay').toggleClass('overlay--show')
  })
  $('.header__nav-button').on('click', function () {
    $('.header__nav-button').removeClass('header__nav-button--white')
    $(this).addClass('header__nav-button--white')
  });
  $('.header__nav-link--arrow').on('click', function () {
    $(this).toggleClass('header__nav-link--arrowup')
  });
  $('.users__slider').slick({
		arrows:false,
    slidesToShow:1,
    draggable:false,
    dots:true,
    verticalSwiping: true,
    touchMove:true,
    dots:true,
		autoplay: true,
    adaptiveheight:true,
    infinite: true,
  })
  })

