let sandwich: Array<string> = ["Veggie Sandwich", "Tuna Sandwich", "Lobster Sandwich", "Asian Sandwich", "Farmer Sandwich"];
let eggs: Array<string> = ["Egg Benedict", "Scrambled", "Sunnyside up", "Hard boiled egg", "Soft boiled egg"];
let coffee: Array<string> = ["Espresso", "Cappuccino", "Machiato", "Late Machiato", "Correto"];
let juices: Array<string> = ["Orange Juice", "Apple Juice", "Strawberry Juice", "Protein Juice"];

let sandwichPrice: Array<number> = [7, 12, 15, 13, 10];
let eggsPrice: Array<number> = [10, 7, 5, 4, 4];
let coffeePrice: Array<number> = [3, 4.4, 4.9, 5, 4.5];
let juicesPrice: Array<number> = [4, 3.5, 5.2, 4.9];

function printDish(name, price){
	for (var i = 0; i < name.length; ++i) {
	let tempName = name[i];
	let tempPrice = price[i].toFixed(2);
	let dish = `
		<div class="${name} menu-restaurant">
			<span class="clearfix">
			<a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
			${tempName}
			</a>
			<span style="left: 166px; right: 44px;" class="menu-line"></span>
			<span class="menu-price">
			${tempPrice} €
			</span>
			</span>
			<span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
		</div>
	`
	document.getElementById("menu-wrapper").innerHTML += dish;
	}

}
printDish(sandwich, sandwichPrice);
printDish(eggs, eggsPrice);
printDish(coffee, coffeePrice);
printDish(juices, juicesPrice);

//Experiment-----------------------------------------












