
const langArr = {
	"home": {
			"ru": "главная",
			"en": "home",
	}, 
	"about": {
			"ru": "обо мне",
			"en": "about me",
	}, 
	"skl": {
			"ru": "навыки",
			"en": "skills",
	}, 
	"portfolio": {
			"ru": "портфолио",
			"en": "portfolio",
	}, 
	"contacts": {
			"ru": "контакты",
			"en": "contacts",
	}, 
	"name": {
			"ru": "Даниил<br>Комаренко",
			"en": "Daniel <br> Komarenko",
	}, 
	"description": {
			"ru": "",
			"en": "Frontend-Developer<br>22 years old, Moscow",
	}, 
	"about-tittle": {
		"ru": "обо мне",
		"en": "about me",
}, 
	"about-text1": {
		"ru": "",
		"en": "Hi, I'm Daniel – Frontend-developer from Moscow.<br>I'm interested in development and everything connected with it.",
}, 
	"about-text2": {
		"ru": "",
		"en": "I have been working in the Web-Development<br>for more than three years.",
}, 
	"about-text3": {
		"ru": "",
		"en": "Ready to implement excellent projects<br>with wonderful people.",
}, 
"skl-tittle": {
	"ru": "Навыки",
	"en": "Skills",
}, 
"skl-text": {
	"ru": "",
	"en": "I work in such programs as",
}, 
"portfolio-tittle": {
	"ru": "портфолио",
	"en": "Portfolio",
}, 
"contacts-tittle": {
	"ru": "контакты",
	"en": "Contacts",
}, 
"contacts-btn": {
	"ru": "",
	"en": "Send message",
}, 
"contacts-text": {
	"ru": "",
	"en": "Want to know more or just chat?<br>You are welcome!",
}, 
"socials-text": {
	"ru": "",
	"en": "Like me on<br>VK, Telegram, WhatsApp, Gmail",
}, 
}
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