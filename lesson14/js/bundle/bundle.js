(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    /*Урок 14*/
    let ajax = require('../parts/ajax.js'),
        animateMenu = require('../parts/animateMenu.js'),
        calc = require('../parts/calc.js'),
        modal = require('../parts/modal.js'),
        slider = require('../parts/slider.js'),
        tab = require('../parts/tab.js'),
        timer = require('../parts/timer.js');

    ajax();
    animateMenu();
    calc();
    modal();
    slider();
    tab();
    timer();        
});

},{"../parts/ajax.js":2,"../parts/animateMenu.js":3,"../parts/calc.js":4,"../parts/modal.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax() {
	let message = new Object();
	    message.loading = 'Загрузка...';
	    message.success = 'Спасибо! Скоро мы с вами свяжемся.';
	    message.failure = 'Что-то пошло не так...';

	    let form = document.getElementsByClassName('main-form')[0],
	        input = form.getElementsByTagName('input'),
	        statusMessage = document.createElement('div');

	        statusMessage.style.color = 'white';

	    form.addEventListener('submit', function(event) {
	        event.preventDefault();
	        form.appendChild(statusMessage);

	        // Ajax
	        /*1) Слздаем объект запроса*/
	        let request = new XMLHttpRequest();

	        /*2) Настройка запроса*/
	        request.open("POST", 'server.php');
	        /*Указываем кодировку данных*/
	        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	        /*Подготавливаем данные для отправки*/
	        let formData = new FormData(form);

	        /*3) Отправка запроса*/
	        request.send(formData);

	        /*Отслеживание статуса запроса*/
	        request.onreadystatechange = function() {
	            if (request.readyState < 4) {
	                statusMessage.innerHTML = '<img src="icons/ajax-loader.gif">' + message.loading;
	            } else if (request.readyState === 4) {
	                if (request.status == 200 && request.status < 300) {
	                    statusMessage.innerHTML = '<img src="icons/checked.png">' + message.success;
	                    /*Добавляем контент на страницу*/
	                } else {
	                    statusMessage.innerHTML = '<img src="icons/error.png">' + message.failure;
	                }
	            }
	        };

	        for (let i = 0; i < input.length; i++) {
	            input[i].value = '';
	            /*Очищаем поля ввода*/
	        }

	    });

	    let contactForm = document.getElementById('form'),
	        contactInput = contactForm.getElementsByTagName('input');

	    contactForm.addEventListener('submit', function(event) {
	        event.preventDefault();
	        contactForm.appendChild(statusMessage);
	        let request = new XMLHttpRequest();
	        request.open("POST", 'server.php');
	        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	        let formData = new FormData(form);
	        request.send(formData);
	        request.onreadystatechange = function() {
	            if (request.readyState < 4) {
	                statusMessage.innerHTML = '<img src="icons/ajax-loader.gif">' + message.loading;
	            } else if (request.readyState === 4) {
	                if (request.status == 200 && request.status < 300) {
	                    statusMessage.innerHTML = '<img src="icons/checked.png">' + message.success;
	                    /*Добавляем контент на страницу*/
	                } else {
	                    statusMessage.innerHTML = '<img src="icons/error.png">' + message.failure;
	                }
	            }
	        };

	        for (let i = 0; i < contactInput.length; i++) {
	            contactInput[i].value = '';
	        }

	    });
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function animateMenu() {
	function animate(draw, duration) {
	    let start = performance.now(); //возвращаем временную метку
	    requestAnimationFrame(function animate(time) {
	        // при помощи requestAnimationFrame мы занимаемся анимацией
	        let timePassed = time - start;
	        if (timePassed > duration) {
	            timePassed = duration;
	        }
	        draw(timePassed);
	        if (timePassed < duration) {
	            requestAnimationFrame(animate);
	        }
	    });
	}
	let menu = document.getElementsByTagName('nav')[0];
	menu.addEventListener('click', (event) => {
	    event.preventDefault();
	    animate(function(timePassed) {
	        let target = event.target;
	        if (target.tagName = 'li') {
	            let section = document.getElementById(target.getAttribute('href').slice(1));
	            window.scrollBy(0, section.getBoundingClientRect().top / 20);
	        }
	    }, 1500);

	});
}

module.exports = animateMenu;
},{}],4:[function(require,module,exports){
function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;
        totalValue.style.color = '#fff';

        persons.addEventListener('change', function () {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if ( restDays.value == '' ) {
                totalValue.innerHTML = 0;
            } else {
                place.selectedIndex = "0";
                totalValue.style.color = '#fff';
                let count = parseInt(totalValue.innerHTML);
                let timer = setInterval(() => {
                    if ( total > count ) {
                        count += 100;
                        totalValue.innerHTML = count;    
                    } else if ( total < count ) {
                        count -= 1000;
                        totalValue.innerHTML = count;    
                    } else if (total == count) {

                        totalValue.style.color = '#c78030';
                        clearInterval(timer);
                    }
                }, 10);
            }
        });

        restDays.addEventListener('change', function () {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if ( persons.value == '' ) {
                totalValue.innerHTML = 0;
            } else {
                place.selectedIndex = "0";
                totalValue.style.color = '#fff';
                let count = parseInt(totalValue.innerHTML);
                let timer = setInterval(() => {
                    if ( total > count ) {
                        count += 100;
                        totalValue.innerHTML = count;    
                    } else if ( total < count ) {
                        count -= 100;
                        totalValue.innerHTML = count;    
                    } else if (total == count) {

                        totalValue.style.color = '#c78030';
                        clearInterval(timer);
                    }
                }, 10);
            }
        });

        place.addEventListener('change', function () {

           if ( restDays.value == '' || persons.value == '' ) {
                totalValue.innerHTML = 0;
           } else {
            let a = total;
            let newTotal = a * this.options[this.selectedIndex].value;
            totalValue.style.color = '#fff';
            let count = parseInt(totalValue.innerHTML);
            let timer = setInterval(() => {
                if ( newTotal > count ) {
                    count += 100;
                    totalValue.innerHTML = count;    
                } else if ( newTotal < count ) {
                    count -= 100;
                    totalValue.innerHTML = count;    
                } else if (newTotal == count) {

                    totalValue.style.color = '#c78030';
                    clearInterval(timer);
                }
            }, 10);
            }
        });

}

module.exports = calc;
},{}],5:[function(require,module,exports){
function modal() {
	let more = document.querySelector('.more'),
	        overlay = document.querySelector('.overlay'),
	        close = document.querySelector('.popup-close'),
	        descrBtn = document.querySelectorAll('.description-btn');

	    overlay.classList.remove('fade');
	    overlay.classList.add('rollIn');

	    more.addEventListener('click', function() {
	        this.classList.add('more-splash');
	        overlay.style.display = 'block';
	        document.body.style.overflow = 'hidden';
	    });

	    for (let i = 0; i < descrBtn.length; i++) {
	        descrBtn[i].addEventListener('click', function() {
	            this.classList.add('more-splash');
	            overlay.style.display = 'block';
	            document.body.style.overflow = 'hidden';
	        });
	    }

	    close.addEventListener('click', () => {
	        more.classList.remove('more-splash');
	        overlay.style.display = 'none';
	        document.body.style.overflow = '';
	    });
}

module.exports = modal;
},{}],6:[function(require,module,exports){
function slider() {
	let sliderIndex = 1,
	    slides = document.getElementsByClassName('slider-item'),
	    prev = document.querySelector('.prev'),
	    next = document.querySelector('.next'),
	    dotsWrap = document.querySelector('.slider-dots'),
	    dot = document.getElementsByClassName('dot');

	    showSlides(sliderIndex);

	    function showSlides(n) {
	        if ( n > slides.length ) {
	            sliderIndex = 1;
	        }
	        if ( n < 1 ) {
	            sliderIndex = slides.length;
	        }

	        for (let i = 0; i < slides.length; i++) {
	            slides[i].style.display = 'none';
	        }

	        for (let i = 0; i < dot.length; i++) {
	            dot[i].classList.remove('dot-active');
	        }

	        slides[sliderIndex-1].style.display = 'block';
	        dot[sliderIndex-1].classList.add('dot-active');

	    }

	    function plusSlides(n) {
	        showSlides( sliderIndex += n );
	    }

	    function currentSlide(n) {
	        showSlides( sliderIndex = n );            
	    }

	    dotsWrap.addEventListener('click', function (event) {
	       for (let i = 0; i < dot.length + 1; i++) {
	        if (event.target.classList.contains('dot') && event.target == dot[i-1] ) {
	            currentSlide(i);
	        }
	       } 
	    });

	    prev.addEventListener('click', function () {
	       plusSlides(-1); 
	    });
	    next.addEventListener('click', function () {
	       plusSlides(1); 
	    });

}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
	    for (let i = a; i < tabContent.length; i++) {
	        tabContent[i].classList.remove('show');
	        tabContent[i].classList.add('hide');
	    }
	}

	hideTabContent(1);

	function showTabContent(b) {
	    if (tabContent[b].classList.contains('hide')) {
	        hideTabContent(0);
	        tabContent[b].classList.remove('hide');
	        tabContent[b].classList.add('show');
	    }
	}

	info.addEventListener('click', (event) => {
	    let target = event.target;
	    if (target.className == 'info-header-tab') {
	        for (let i = 0; i < tab.length; i++) {
	            if (target == tab[i]) {
	                showTabContent(i);
	                break;
	            }
	        }
	    }
	});
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	let deadline = '2018-04-05';
	//new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
	function getTimeRemaining(endtime) {
	    let t = Date.parse(endtime) - Date.parse(new Date()),
	        seconds = Math.floor((t / 1000) % 60),
	        minutes = Math.floor((t / 1000 / 60) % 60),
	        hours = Math.floor((t / (1000 * 60 * 60)));

	    return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	    };

	}

	function setClock(id, endtime) {

	    let timer = document.getElementById(id),
	        hours = timer.querySelector('.hours'),
	        minutes = timer.querySelector('.minutes'),
	        seconds = timer.querySelector('.seconds');

	    function updateClock() {
	        let t = getTimeRemaining(endtime);
	        if (t.total <= 0) {

	            clearInterval(timeInterval);

	        } else {
	            hours.innerHTML = t.hours;
	            minutes.innerHTML = t.minutes;
	            seconds.innerHTML = t.seconds;
	        }
	    }

	    if (getTimeRemaining(endtime).total >= 0) {
	        updateClock();
	        let timeInterval = setInterval(updateClock, 1000);
	    } else {

	        hours.innerHTML = '00';
	        minutes.innerHTML = '00';
	        seconds.innerHTML = '00';
	    }
	}

	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
