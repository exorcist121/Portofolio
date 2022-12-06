// Slider
$(function () {
	$('.products__slider').slick({
		arrows: false,
		slidesToShow: 4,
		infinite: true,
		draggable: false,
		waitForAnimate: false,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		appendDots: $('.products__slider-dots'),
		responsive: [
			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			}
		]
	})
	$('.products__slider-prev').on('click', function (e) {
		e.preventDefault()
		$('.products__slider').slick('slickPrev')
	})
	$('.products__slider-next').on('click', function (e) {
		e.preventDefault()
		$('.products__slider').slick('slickNext')
	})
});
// Timer
document.addEventListener("DOMContentLoaded", (() => {
	const newYear = new Date("Jan 8 2023 00:00:00");
	const daysVal = document.querySelector(".time-count__days .time-count__val");
	const hoursVal = document.querySelector(".time-count__hours .time-count__val");
	const minutesVal = document.querySelector(".time-count__minutes .time-count__val");
	const daysText = document.querySelector(".time-count__days .time-count__text");
	const hoursText = document.querySelector(".time-count__hours .time-count__text");
	const minutesText = document.querySelector(".time-count__minutes .time-count__text");
	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
	}
	const timeCount = () => {
		let now = new Date;
		let leftUntil = newYear - now;
		let days = Math.floor(leftUntil / 1e3 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1e3 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1e3 / 60) % 60;
		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		if (minutes < 10) minutesVal.innerHTML = "09";
		if (minutes < 9) minutesVal.innerHTML = "08\t";
		if (minutes < 8) minutesVal.innerHTML = "07\t";
		if (minutes < 7) minutesVal.innerHTML = "06\t";
		if (minutes < 6) minutesVal.innerHTML = "05\t";
		if (minutes < 5) minutesVal.innerHTML = "04\t";
		if (minutes < 4) minutesVal.innerHTML = "03\t";
		if (minutes < 3) minutesVal.innerHTML = "02\t";
		if (minutes < 2) minutesVal.innerHTML = "01\t";
		if (minutes < 1) minutesVal.innerHTML = "00\t";
		if (hours < 10) hoursVal.innerHTML = "09";
		if (hours < 9) hoursVal.innerHTML = "08\t";
		if (hours < 8) hoursVal.innerHTML = "07\t";
		if (hours < 7) hoursVal.innerHTML = "06\t";
		if (hours < 6) hoursVal.innerHTML = "05\t";
		if (hours < 5) hoursVal.innerHTML = "04\t";
		if (hours < 4) hoursVal.innerHTML = "03\t";
		if (hours < 3) hoursVal.innerHTML = "02\t";
		if (hours < 2) hoursVal.innerHTML = "01\t";
		if (hours < 1) hoursVal.innerHTML = "00\t";
		if (days < 10) daysVal.innerHTML = "09";
		if (days < 9) daysVal.innerHTML = "08\t";
		if (days < 8) daysVal.innerHTML = "07\t";
		if (days < 7) daysVal.innerHTML = "06\t";
		if (days < 6) daysVal.innerHTML = "05\t";
		if (days < 5) daysVal.innerHTML = "04\t";
		if (days < 4) daysVal.innerHTML = "03\t";
		if (days < 3) daysVal.innerHTML = "02\t";
		if (days < 2) daysVal.innerHTML = "01\t";
		if (days < 1) daysVal.innerHTML = "00\t";
	};
	timeCount();
	setInterval(timeCount, 1e3);
}));
// ShowMore
const showMore = document.querySelector('.recipes__button');
const productsLength = document.querySelectorAll('.recipes__box-card').length;
let items = 8;
showMore.addEventListener('click', () => {
	items += 8;
	const array = Array.from(document.querySelector('.recipes__box').children);
	const visItems = array.slice(0, items);
	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
		$('.recipes__farewell').toggleClass('recipes__farewell--margin')
	}
});
//smoothTransition
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
};
// burger
$('.burger__nav, .overlay').on('click', function (e){
	e.preventDefault()
	$('.header__top-nav').toggleClass('header__top-nav--open')
	$('.burger__nav').toggleClass('burger__nav--open')
	$('.overlay').toggleClass('overlay--show')
})
$( '.header__top-nav li a' ).on("click", function(){
  $('.burger__nav').click();
});
// Popup
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close'); // Кнопка для скрытия окна
openPopupButtons.forEach((button) => { // Перебираем все кнопки
	button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
			e.preventDefault(); // Предотвращаем дефолтное поведение браузера
			popupBg.classList.add('active'); // Добавляем класс 'active' для фона
			popup.classList.add('active'); // И для самого окна
	})
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
	popupBg.classList.remove('active'); // Убираем активный класс с фона
	popup.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
	if(e.target === popupBg) { // Если цель клика - фот, то:
			popupBg.classList.remove('active'); // Убираем активный класс с фона
			popup.classList.remove('active'); // И с окна
	}
});
// PageUp
$(function() {
	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
	$('.page-up__button').fadeIn();
	} else {
	$('.page-up__button').fadeOut();
	}
	});
	$('.page-up__button').click(function() {
	$('body,html').animate({scrollTop:0},800);
	});
	});
	// deviceDetec
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // console.log('ios')
  } else {
    // console.log('No')
}