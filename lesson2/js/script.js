let money 		= prompt('Вашь бюджет?'),
	name 		= prompt('Название вашего магазина?'),
	time 		= 19;

let	mainList 	= {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false
	}

// for (let i = 0; i < 3; i++ ) {

// 	let a = prompt('Что будем продавать?');
	
// 	if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50) {
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		alert('Что то пошло не так!');
//         i--;
// 	}
// }

let i = 0;
do {
	let a = prompt('Что будем продавать?');
	if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50) {
		console.log('Товар добавлен!');
		mainList.shopGoods[i] = a;
        i++;
	} else {
		alert('Что то пошло не так!');
	}
} while (i < 3);





if (time < 0 ) {
	console.log('Такого просто не может быть');
} else if(time > 8 && time < 20) {
	console.log('Открываем магазин');
	} else if(time < 24) {
		console.log('Уже слишком поздно');
		} else {
		console.log('В сутках только 24 часа');
		};

alert( 'В день ты тратишь ' + mainList.budget / 30 + ' руб.' );
console.log(mainList);