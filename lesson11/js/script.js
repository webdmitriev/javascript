window.addEventListener("DOMContentLoaded", function(){

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0],
        tabBtn = document.getElementsByClassName('description-btn')[0];


let start = Date.now(),
    timer = setInterval(() => {
        let timePassed = Date.now() - start;
        if (timePassed >= 2000) {
            clearInterval(timer);
            return;
        }
        draw(timePassed);

    }, 20);
    function draw(timePassed) {
        tabBtn.style.left = timePassed / 5 + 'px';
    }

    function hideTabContent(startNumber) {
        for (let i = startNumber; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        };
    };
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

//Timer
let deadLine = '2018-04-20'

function getTimeRemaning(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor( (t / 1000) % 60),
        minutes = Math.floor( (t / 1000 / 60) % 60),
        hours = minutes = Math.floor(t / 1000 / 60 / 60);

    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function setClock(id, endTime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaning(endTime);
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            clearInterval(timeInterval);
        }
    };
    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
};
setClock('timer', deadLine);


//Slow scroll
//animate
function animate(draw, duration) {
    // Получаем время сейчас
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timePassed = time - start;
        //Узнали сколько времени прошло с начала анимации
        if (timePassed > duration) {
            timePassed = duration;
        } // Если прошедшее время больше продолжительности, то рисуем последний кадр и заканчиваем.
        draw(timePassed);
        // Если еще есть время, планируем следующий кадр
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }
    })
};
// Находим меню
let menu = document.getElementsByTagName('nav')[0];
 menu.addEventListener('click', (event) => {
    event.preventDefault();
    animate((timePassed) => {
        let target = event.target;
      if (target.tagName = 'li') {
        // Находим куда скроллиться
        let section = document.getElementById(target.getAttribute('href').slice(1));
          window.scrollBy(0, section.getBoundingClientRect().top / 20);
      }  
    }, 1500)
    
 });


// Modal
let more = document.querySelector('.more'),
    moreTab = document.querySelector('.info'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

moreTab.addEventListener('click', (event) => {
    statusMessage.innerHTML = '';
    form.style.display = "block";
    let target = event.target;
    if (target.classList.contains('description-btn')) {
        target.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
    }
});
more.addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
})
//Form
let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо, мы с Вами скоро свяжемся!";
message.fail = "Что-то пошло не так";

let form = document.getElementsByClassName('main-form')[0],
    contactsForm = document.getElementById('form');
    popupForm = document.getElementsByClassName('popup-form')[0],
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        popupForm.appendChild(statusMessage);

        // AJAX
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function() {
            form.style.display = 'none';
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;

                    //Добавляем контент на страницу
                }
                else {
                    statusMessage.innerHTML = message.fail;
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            //Чистим инпуты
        }    
    });
    contactsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        overlay.style.display = 'block';
        form.style.display = 'none';
        popupForm.appendChild(statusMessage);

        // AJAX
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        request.send(formData);
        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                    //Добавляем контент на страницу
                }
                else {
                    statusMessage.innerHTML = message.fail;
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            //Чистим инпуты
        }
    });
    

});

