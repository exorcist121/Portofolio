$(function () {
$('.header__slider').slick({
  arrows:false,
  infinite: true,
  draggable:false,
  dots:true,
  waitForAnimate: false,
  autoplay: true,
  appendDots:$('.header__slider-dots')
})
$('.header__slider-prev').on('click',function(e){
  e.preventDefault()
  $('.header__slider').slick('slickPrev')
})
$('.header__slider-next').on('click',function(e){
  e.preventDefault()
  $('.header__slider').slick('slickNext')
});
$('.partners__slider').slick({
  arrows:false,
  infinite: true,
  draggable:false,
  dots:true,
  waitForAnimate: false,
  appendDots:$('.partners__slider-dots')
})
$('.partners__slider-prev').on('click',function(e){
  e.preventDefault()
  $('.partners__slider').slick('slickPrev')
})
$('.partners__slider-next').on('click',function(e){
  e.preventDefault()
  $('.partners__slider').slick('slickNext')
});
$('.reviews__slider').slick({
  arrows:false,
  infinite: true,
  draggable:false,
  dots:true,
  waitForAnimate: false,
  appendDots:$('.reviews__slider-dots')
})
$('.reviews__slider-prev').on('click',function(e){
  e.preventDefault()
  $('.reviews__slider').slick('slickPrev')
})
$('.reviews__slider-next').on('click',function(e){
  e.preventDefault()
  $('.reviews__slider').slick('slickNext')
});
$('.burger__nav').on('click', function (e){
  e.preventDefault()
  $('.header__top-content').toggleClass('header__top-content--open')
  $('.burger__nav').toggleClass('burger__nav--open')
})
});
