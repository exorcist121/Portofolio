const parent = document.querySelector('.header__heading-langues');
const childs = document.querySelectorAll('.header__heading-item');
const allLang = ['en', 'ru'];

parent.addEventListener('click', (e) =>{
	if (e.target.classList.contains('header__heading-item')) {
		for(let i = 0; i < childs.length; i++) {
      // Убираем у других
      childs[i].classList.remove('is-active');
    }
		let lang = e.target.value;
		location.href = window.location.pathname + '#' + lang;
		e.target.classList.add("is-active");
	}
	location.reload();
});

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	// document.queryselor('title').innerHTML = langArr[''][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lang-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}
changeLanguage();
// let rusLang = document.getElementsByClassName('rus-lang');
// let engLang = document.getElementsByClassName('en-lang');
// console.log(rusLang)
// rusLang.addEventListener('click', function(){
// 	for (i = 0; i < enLang.length; i++) {
// 		rusLang[i].style.display = "block";
// 		engLang[i].style.display = "none";

// 	}
// });