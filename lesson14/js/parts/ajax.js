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