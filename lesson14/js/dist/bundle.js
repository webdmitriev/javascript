/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundle/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle/script.js":
/*!**************************!*\
  !*** ./bundle/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function() {\n\n    /*Урок 14*/\n    let ajax = __webpack_require__(/*! ../parts/ajax.js */ \"./parts/ajax.js\"),\n        animateMenu = __webpack_require__(/*! ../parts/animateMenu.js */ \"./parts/animateMenu.js\"),\n        calc = __webpack_require__(/*! ../parts/calc.js */ \"./parts/calc.js\"),\n        modal = __webpack_require__(/*! ../parts/modal.js */ \"./parts/modal.js\"),\n        slider = __webpack_require__(/*! ../parts/slider.js */ \"./parts/slider.js\"),\n        tab = __webpack_require__(/*! ../parts/tab.js */ \"./parts/tab.js\"),\n        timer = __webpack_require__(/*! ../parts/timer.js */ \"./parts/timer.js\");\n\n    ajax();\n    animateMenu();\n    calc();\n    modal();\n    slider();\n    tab();\n    timer();        \n});\n\n\n//# sourceURL=webpack:///./bundle/script.js?");

/***/ }),

/***/ "./parts/ajax.js":
/*!***********************!*\
  !*** ./parts/ajax.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ajax() {\n\tlet message = new Object();\n\t    message.loading = 'Загрузка...';\n\t    message.success = 'Спасибо! Скоро мы с вами свяжемся.';\n\t    message.failure = 'Что-то пошло не так...';\n\n\t    let form = document.getElementsByClassName('main-form')[0],\n\t        input = form.getElementsByTagName('input'),\n\t        statusMessage = document.createElement('div');\n\n\t        statusMessage.style.color = 'white';\n\n\t    form.addEventListener('submit', function(event) {\n\t        event.preventDefault();\n\t        form.appendChild(statusMessage);\n\n\t        // Ajax\n\t        /*1) Слздаем объект запроса*/\n\t        let request = new XMLHttpRequest();\n\n\t        /*2) Настройка запроса*/\n\t        request.open(\"POST\", 'server.php');\n\t        /*Указываем кодировку данных*/\n\t        request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n\t        /*Подготавливаем данные для отправки*/\n\t        let formData = new FormData(form);\n\n\t        /*3) Отправка запроса*/\n\t        request.send(formData);\n\n\t        /*Отслеживание статуса запроса*/\n\t        request.onreadystatechange = function() {\n\t            if (request.readyState < 4) {\n\t                statusMessage.innerHTML = '<img src=\"icons/ajax-loader.gif\">' + message.loading;\n\t            } else if (request.readyState === 4) {\n\t                if (request.status == 200 && request.status < 300) {\n\t                    statusMessage.innerHTML = '<img src=\"icons/checked.png\">' + message.success;\n\t                    /*Добавляем контент на страницу*/\n\t                } else {\n\t                    statusMessage.innerHTML = '<img src=\"icons/error.png\">' + message.failure;\n\t                }\n\t            }\n\t        };\n\n\t        for (let i = 0; i < input.length; i++) {\n\t            input[i].value = '';\n\t            /*Очищаем поля ввода*/\n\t        }\n\n\t    });\n\n\t    let contactForm = document.getElementById('form'),\n\t        contactInput = contactForm.getElementsByTagName('input');\n\n\t    contactForm.addEventListener('submit', function(event) {\n\t        event.preventDefault();\n\t        contactForm.appendChild(statusMessage);\n\t        let request = new XMLHttpRequest();\n\t        request.open(\"POST\", 'server.php');\n\t        request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n\t        let formData = new FormData(form);\n\t        request.send(formData);\n\t        request.onreadystatechange = function() {\n\t            if (request.readyState < 4) {\n\t                statusMessage.innerHTML = '<img src=\"icons/ajax-loader.gif\">' + message.loading;\n\t            } else if (request.readyState === 4) {\n\t                if (request.status == 200 && request.status < 300) {\n\t                    statusMessage.innerHTML = '<img src=\"icons/checked.png\">' + message.success;\n\t                    /*Добавляем контент на страницу*/\n\t                } else {\n\t                    statusMessage.innerHTML = '<img src=\"icons/error.png\">' + message.failure;\n\t                }\n\t            }\n\t        };\n\n\t        for (let i = 0; i < contactInput.length; i++) {\n\t            contactInput[i].value = '';\n\t        }\n\n\t    });\n}\n\nmodule.exports = ajax;\n\n//# sourceURL=webpack:///./parts/ajax.js?");

/***/ }),

/***/ "./parts/animateMenu.js":
/*!******************************!*\
  !*** ./parts/animateMenu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function animateMenu() {\n\tfunction animate(draw, duration) {\n\t    let start = performance.now(); //возвращаем временную метку\n\t    requestAnimationFrame(function animate(time) {\n\t        // при помощи requestAnimationFrame мы занимаемся анимацией\n\t        let timePassed = time - start;\n\t        if (timePassed > duration) {\n\t            timePassed = duration;\n\t        }\n\t        draw(timePassed);\n\t        if (timePassed < duration) {\n\t            requestAnimationFrame(animate);\n\t        }\n\t    });\n\t}\n\tlet menu = document.getElementsByTagName('nav')[0];\n\tmenu.addEventListener('click', (event) => {\n\t    event.preventDefault();\n\t    animate(function(timePassed) {\n\t        let target = event.target;\n\t        if (target.tagName = 'li') {\n\t            let section = document.getElementById(target.getAttribute('href').slice(1));\n\t            window.scrollBy(0, section.getBoundingClientRect().top / 20);\n\t        }\n\t    }, 1500);\n\n\t});\n}\n\nmodule.exports = animateMenu;\n\n//# sourceURL=webpack:///./parts/animateMenu.js?");

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\n\tlet persons = document.getElementsByClassName('counter-block-input')[0],\n        restDays = document.getElementsByClassName('counter-block-input')[1],\n        place = document.getElementById('select'),\n        totalValue = document.getElementById('total'),\n        personsSum = 0,\n        daysSum = 0,\n        total = 0;\n\n        totalValue.innerHTML = 0;\n        totalValue.style.color = '#fff';\n\n        persons.addEventListener('change', function () {\n            if (parseInt(this.value) < 0 ) {\n                this.value = '';\n            }\n            personsSum = +this.value;\n            total = (daysSum + personsSum)*4000;\n            if ( restDays.value == '' ) {\n                totalValue.innerHTML = 0;\n            } else {\n                place.selectedIndex = \"0\";\n                totalValue.style.color = '#fff';\n                let count = parseInt(totalValue.innerHTML);\n                let timer = setInterval(() => {\n                    if ( total > count ) {\n                        count += 100;\n                        totalValue.innerHTML = count;    \n                    } else if ( total < count ) {\n                        count -= 1000;\n                        totalValue.innerHTML = count;    \n                    } else if (total == count) {\n\n                        totalValue.style.color = '#c78030';\n                        clearInterval(timer);\n                    }\n                }, 10);\n            }\n        });\n\n        restDays.addEventListener('change', function () {\n            if (parseInt(this.value) < 0 ) {\n                this.value = '';\n            }\n            daysSum = +this.value;\n            total = (daysSum + personsSum)*4000;\n            if ( persons.value == '' ) {\n                totalValue.innerHTML = 0;\n            } else {\n                place.selectedIndex = \"0\";\n                totalValue.style.color = '#fff';\n                let count = parseInt(totalValue.innerHTML);\n                let timer = setInterval(() => {\n                    if ( total > count ) {\n                        count += 100;\n                        totalValue.innerHTML = count;    \n                    } else if ( total < count ) {\n                        count -= 100;\n                        totalValue.innerHTML = count;    \n                    } else if (total == count) {\n\n                        totalValue.style.color = '#c78030';\n                        clearInterval(timer);\n                    }\n                }, 10);\n            }\n        });\n\n        place.addEventListener('change', function () {\n\n           if ( restDays.value == '' || persons.value == '' ) {\n                totalValue.innerHTML = 0;\n           } else {\n            let a = total;\n            let newTotal = a * this.options[this.selectedIndex].value;\n            totalValue.style.color = '#fff';\n            let count = parseInt(totalValue.innerHTML);\n            let timer = setInterval(() => {\n                if ( newTotal > count ) {\n                    count += 100;\n                    totalValue.innerHTML = count;    \n                } else if ( newTotal < count ) {\n                    count -= 100;\n                    totalValue.innerHTML = count;    \n                } else if (newTotal == count) {\n\n                    totalValue.style.color = '#c78030';\n                    clearInterval(timer);\n                }\n            }, 10);\n            }\n        });\n\n}\n\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./parts/calc.js?");

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\n\tlet more = document.querySelector('.more'),\n\t        overlay = document.querySelector('.overlay'),\n\t        close = document.querySelector('.popup-close'),\n\t        descrBtn = document.querySelectorAll('.description-btn');\n\n\t    overlay.classList.remove('fade');\n\t    overlay.classList.add('rollIn');\n\n\t    more.addEventListener('click', function() {\n\t        this.classList.add('more-splash');\n\t        overlay.style.display = 'block';\n\t        document.body.style.overflow = 'hidden';\n\t    });\n\n\t    for (let i = 0; i < descrBtn.length; i++) {\n\t        descrBtn[i].addEventListener('click', function() {\n\t            this.classList.add('more-splash');\n\t            overlay.style.display = 'block';\n\t            document.body.style.overflow = 'hidden';\n\t        });\n\t    }\n\n\t    close.addEventListener('click', () => {\n\t        more.classList.remove('more-splash');\n\t        overlay.style.display = 'none';\n\t        document.body.style.overflow = '';\n\t    });\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./parts/modal.js?");

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\n\tlet sliderIndex = 1,\n\t    slides = document.getElementsByClassName('slider-item'),\n\t    prev = document.querySelector('.prev'),\n\t    next = document.querySelector('.next'),\n\t    dotsWrap = document.querySelector('.slider-dots'),\n\t    dot = document.getElementsByClassName('dot');\n\n\t    showSlides(sliderIndex);\n\n\t    function showSlides(n) {\n\t        if ( n > slides.length ) {\n\t            sliderIndex = 1;\n\t        }\n\t        if ( n < 1 ) {\n\t            sliderIndex = slides.length;\n\t        }\n\n\t        for (let i = 0; i < slides.length; i++) {\n\t            slides[i].style.display = 'none';\n\t        }\n\n\t        for (let i = 0; i < dot.length; i++) {\n\t            dot[i].classList.remove('dot-active');\n\t        }\n\n\t        slides[sliderIndex-1].style.display = 'block';\n\t        dot[sliderIndex-1].classList.add('dot-active');\n\n\t    }\n\n\t    function plusSlides(n) {\n\t        showSlides( sliderIndex += n );\n\t    }\n\n\t    function currentSlide(n) {\n\t        showSlides( sliderIndex = n );            \n\t    }\n\n\t    dotsWrap.addEventListener('click', function (event) {\n\t       for (let i = 0; i < dot.length + 1; i++) {\n\t        if (event.target.classList.contains('dot') && event.target == dot[i-1] ) {\n\t            currentSlide(i);\n\t        }\n\t       } \n\t    });\n\n\t    prev.addEventListener('click', function () {\n\t       plusSlides(-1); \n\t    });\n\t    next.addEventListener('click', function () {\n\t       plusSlides(1); \n\t    });\n\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./parts/slider.js?");

/***/ }),

/***/ "./parts/tab.js":
/*!**********************!*\
  !*** ./parts/tab.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tab() {\n\tlet tab = document.getElementsByClassName('info-header-tab'),\n\t    tabContent = document.getElementsByClassName('info-tabcontent'),\n\t    info = document.getElementsByClassName('info-header')[0];\n\n\tfunction hideTabContent(a) {\n\t    for (let i = a; i < tabContent.length; i++) {\n\t        tabContent[i].classList.remove('show');\n\t        tabContent[i].classList.add('hide');\n\t    }\n\t}\n\n\thideTabContent(1);\n\n\tfunction showTabContent(b) {\n\t    if (tabContent[b].classList.contains('hide')) {\n\t        hideTabContent(0);\n\t        tabContent[b].classList.remove('hide');\n\t        tabContent[b].classList.add('show');\n\t    }\n\t}\n\n\tinfo.addEventListener('click', (event) => {\n\t    let target = event.target;\n\t    if (target.className == 'info-header-tab') {\n\t        for (let i = 0; i < tab.length; i++) {\n\t            if (target == tab[i]) {\n\t                showTabContent(i);\n\t                break;\n\t            }\n\t        }\n\t    }\n\t});\n}\n\nmodule.exports = tab;\n\n//# sourceURL=webpack:///./parts/tab.js?");

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\n\tlet deadline = '2018-04-05';\n\t//new Date(new Date().getTime() + 24 * 60 * 60 * 1000)\n\tfunction getTimeRemaining(endtime) {\n\t    let t = Date.parse(endtime) - Date.parse(new Date()),\n\t        seconds = Math.floor((t / 1000) % 60),\n\t        minutes = Math.floor((t / 1000 / 60) % 60),\n\t        hours = Math.floor((t / (1000 * 60 * 60)));\n\n\t    return {\n\t        'total': t,\n\t        'hours': hours,\n\t        'minutes': minutes,\n\t        'seconds': seconds\n\t    };\n\n\t}\n\n\tfunction setClock(id, endtime) {\n\n\t    let timer = document.getElementById(id),\n\t        hours = timer.querySelector('.hours'),\n\t        minutes = timer.querySelector('.minutes'),\n\t        seconds = timer.querySelector('.seconds');\n\n\t    function updateClock() {\n\t        let t = getTimeRemaining(endtime);\n\t        if (t.total <= 0) {\n\n\t            clearInterval(timeInterval);\n\n\t        } else {\n\t            hours.innerHTML = t.hours;\n\t            minutes.innerHTML = t.minutes;\n\t            seconds.innerHTML = t.seconds;\n\t        }\n\t    }\n\n\t    if (getTimeRemaining(endtime).total >= 0) {\n\t        updateClock();\n\t        let timeInterval = setInterval(updateClock, 1000);\n\t    } else {\n\n\t        hours.innerHTML = '00';\n\t        minutes.innerHTML = '00';\n\t        seconds.innerHTML = '00';\n\t    }\n\t}\n\n\tsetClock('timer', deadline);\n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./parts/timer.js?");

/***/ })

/******/ });