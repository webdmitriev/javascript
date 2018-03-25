var myMoney 	= prompt('Ваш бюджет? '),
	myMagazin 	= prompt('Название вашего магазина: '),
	score1 		= prompt('Какой тип товара будем продавать?'),
	score2 		= prompt('А ещё какой?'),
	score3 		= prompt('Давай ещё что-нибудь?'),
	employees	= prompt('Сколько сотрудников в штате?'),
	mainList 	= {
		money: myMoney,
		price: myMagazin,
		shopGoods: [score1, score2, score3],
		employers: {employees},
		open: false
	};

var year = prompt('Ваня, с какого я потока Веб-разработчик?', '');
if (year == 9) {
  alert( 'Красавчик!' );
} else {
  alert( 'А вот и ' + 'неправильно!' ); // любое значение, кроме 9
};

console.log(mainList);
console.log(myMoney/30);