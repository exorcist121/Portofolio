var mixer = mixitup('.portfolio__works',{
	"animation": {
		"duration": 600,
		"nudge": false,
		"reverseOut": false,
		"effects": "fade rotateX(45deg)"
}
});
$('.portfolio__works-btn').on('click', function () {
	$('.portfolio__works-btn').removeClass('portfolio__works-btn--active')
	$(this).addClass('portfolio__works-btn--active')
});