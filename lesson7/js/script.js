let open_store_btn = document.getElementById("open-btn");
let name = document.getElementsByClassName("name")[0];
let name_value = document.getElementsByClassName("name-value")[0];
let budget = document.getElementsByClassName("budget")[0];
let budget_value = document.getElementsByClassName("budget-value")[0];
let goods = document.getElementsByClassName("goods")[0];
let goods_value = document.getElementsByClassName("goods-value")[0];
let items = document.getElementsByClassName("items")[0];
let items_value = document.getElementsByClassName("items-value")[0];
let employers = document.getElementsByClassName("employers")[0];
let employers_value = document.getElementsByClassName("employers-value")[0];
let discount = document.getElementsByClassName("discount")[0];
let discount_value = document.getElementsByClassName("discount-value")[0];
let isopen = document.getElementsByClassName("isopen")[0];
let isopen_value = document.getElementsByClassName("isopen-value")[0];
let goods_items = document.getElementsByClassName("goods-item");
let main_func_block = document.querySelector(".main-functions");
let goods_item_btn = main_func_block.getElementsByTagName("button")[0];
let count_budget_btn = main_func_block.getElementsByTagName("button")[1];
let hire_empl_btn = main_func_block.getElementsByTagName("button")[2];
let choose_items = document.querySelector(".choose-item");
let time_value = document.querySelector(".time-value");
let count_budget_value = document.querySelector(".count-budget-value");
let hire_empl_items = document.querySelectorAll(".hire-employers-item");
let mainList = {
	listBudget : 0,
	listShopName : "7eleven",
	listShopGoods :[],
	listEmployers: {},
	listShopItems: [],
	open: false,
	discount: true,
}
	
open_store_btn.addEventListener("click", () => {
	setTimeout(starter, 2000);
} );
// open_store_btn.addEventListener("click", () => {
// 	setInterval(starter, 12000);
// } );

function starter() {
	let tmp = +prompt("Ваш бюджет?", "58000");
	while ( isNaN(tmp) || tmp === "" ) {
		console.log("Не похоже на бюджет, попробуй еще раз");
		budget = +prompt("Ваш бюджет?", "");
	}
	let shopName = prompt("Название магазина?", "").toUpperCase();

	mainList.listBudget = tmp;
	budget_value.textContent = tmp;
	mainList.listShopName = shopName;
	name_value.textContent = shopName;	
}
goods_item_btn.addEventListener("click", () => {
	 for ( let i = 0; i < goods_items.length; ++i) {
	 	mainList.listShopGoods[i] = goods_items[i].value;
	 }
	 goods_value.textContent = mainList.listShopGoods;
});
choose_items.addEventListener("change", () => {
	let tmp = choose_items.value;
	if (isNaN(tmp) && tmp !== "") {
		mainList.listShopItems = tmp.split(",").sort();
		items_value.textContent = mainList.listShopItems;
	}
});
time_value.addEventListener("change", () => {
	let curr_time = time_value.value;
	if ( curr_time >= 8 && curr_time <= 20 ) {
		mainList.open = true;
	} else {
		mainList.open = false;
	}
	if ( mainList.open ) {
		isopen_value.style.backgroundColor = "green";
	} else {
		isopen_value.style.backgroundColor = "red";
	}
});
count_budget_btn.addEventListener("click", () => {
	console.log();
	let daily_budg = Math.round(mainList.listBudget / 30);
	count_budget_value.value = daily_budg;
	if (daily_budg >= 1000) {
		discount_value.style.backgroundColor = "green";
	} else {
		discount_value.style.backgroundColor = "red"
	}
});
hire_empl_btn.addEventListener("click",() => {
	for (let i = 0; i < hire_empl_items.length; ++i) {
		let tmp = hire_empl_items[i].value;
		employers_value.textContent += tmp + "; ";
	}
});