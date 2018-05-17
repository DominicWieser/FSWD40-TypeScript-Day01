var options = [
]

var sandwich: Array<string> = ["Veggie Sandwich", "Tuna Sandwich", "Lobster Sandwich", "Asian Sandwich", "Farmer Sandwich"];
let eggs: Array<string> = ["Egg Benedict", "Scrambled", "Sunnyside up", "Hard boiled egg", "Soft boiled egg"];
let coffee: Array<string> = ["Espresso", "Cappuccino", "Machiato", "Late Machiato", "Correto"];
let juices: Array<string> = ["Orange Juice", "Apple Juice", "Strawberry Juice", "Protein Juice"];

let sandwichPrice: Array<number> = [7, 12, 15, 13, 10];
let eggsPrice: Array<number> = [10, 7, 5, 4, 4];
let coffeePrice: Array<number> = [3, 4.4, 4.9, 5, 4.5];
let juicesPrice: Array<number> = [4, 3.5, 5.2, 4.9];

var tempClass = ["sandwich", "eggs", "coffee", "juices"];


function printAllDishes(){
	let u = 0;
	printDish(sandwich, sandwichPrice);
	printDish(eggs, eggsPrice);
	printDish(coffee, coffeePrice);
	printDish(juices, juicesPrice);
}
	function printDish(name, price){
	// for (let i = 0; i < tempClass.length; ++i) {

		for (var j = 0; j < name.length; ++j) {
		// var tC = tempClass[i]
		
		let tempName = name[j];
		let tempPrice = price[j].toFixed(2);
		let dish = `
			<div class="${tempClass[u]} menu-restaurant">
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
		};	
		u++;
	// }


	}
	

printAllDishes();



//Experiment-----------------------------------------












