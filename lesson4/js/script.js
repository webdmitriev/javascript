var money,
	name,
	time,
	price;

var	mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		startFun: function start() {
			money = prompt('Какой ваш бюджет?');
			while (isNaN(money) || money === '' || money === null) {
				money = prompt('Какой ваш бюджет?');
			}

			name = prompt('Название магазина?').toUpperCase();
			time = 19;
		},
		chooseGoodsFun: function chooseGoods() {
			for (var i = 0; i < 3; i++ ) {
				var a = prompt('Какой тип товара будем продавать?');

				if (typeof(a) === 'string' && typeof(a) !== null && a !== '' && a.length < 50) {
					mainList.shopGoods[i] = a;
				} else {
					alert('Что то пошло не так!');
			        i--;
				}
			}
		},
		workTimeFun: function workTime(time) {
			if (time < 0 ) {
				console.log('Такого просто не может быть');
			} else if(time > 8 && time < 20) {
				console.log('Открываем магазин');
			} else if(time < 24) {
				console.log('Уже слишком поздно');
			} else {
				console.log('В сутках только 24 часа');
			}
		},
		budgetFun: function budget() {
			alert( 'В день ты тратишь ' + mainList.budget / 30 + ' руб.' );
		},
		discountFun: function discount() {
			a = confirm('Discount?');

			if (a) {
				price = +prompt('Введите цену');
				price *= 0.8;
			}
		},
		employersFun: function employers() {
			for (i = 1; i < 5; i++) {
				mainList.employers['Сотрудник №' + i] = prompt('Имя сотрудника?');
			}
		}
	};

console.log(mainList);

// let time = +prompt('Введите время');

// if (isNaN(time)){
// 	alert('Необходимо ввести число');
// } else {
// 	if (time < 0) {
// 		alert('Такого просто не может быть');
// 	} else if (time > 8 && time < 20) {
// 		alert('Открываем магазин');
// 	} else if (time <= 24) {
// 		alert('Уже слишком поздно');
// 	} else if (time > 24) {
// 		alert('В сутках только 24 часа');
// 	};
	
// };