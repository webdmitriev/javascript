var menuItem = document.querySelectorAll('.menu-item');
var menu = document.querySelector('.menu');
var menuItem5 = document.createElement('li');
var adv = document.getElementsByClassName('adv');
var title = document.getElementById('title');
var addPrompt = document.getElementById('prompt');

document.body.style.background = "url('img/apple_true.jpg')";

menu.insertBefore(menuItem[2], menuItem[1]);
menuItem5.classList.add('menu-item');
menuItem5.textContent = 'Пятый пункт';
menu.appendChild(menuItem5);

adv[0].style.display = 'none';

title.textContent = 'Покупайте ли вы технику Apple?';

var review = prompt('Как вы относитесь к технике Apple?', 'Изредка, цена кусается');
addPrompt.textContent = review;