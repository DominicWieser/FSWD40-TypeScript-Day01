var sandwich = ["Veggie Sandwich", "Tuna Sandwich", "Lobster Sandwich", "Asian Sandwich", "Farmer Sandwich"];
var eggs = ["Egg Benedict", "Scrambled", "Sunnyside up", "Hard boiled egg", "Soft boiled egg"];
var coffee = ["Espresso", "Cappuccino", "Machiato", "Late Machiato", "Correto"];
var juices = ["Orange Juice", "Apple Juice", "Strawberry Juice", "Protein Juice"];
var sandwichPrice = [7, 12, 15, 13, 10];
var eggsPrice = [10, 7, 5, 4, 4];
var coffeePrice = [3, 4.4, 4.9, 5, 4.5];
var juicesPrice = [4, 3.5, 5.2, 4.9];
function printDish(name, price) {
    for (var i = 0; i < name.length; ++i) {
        var tempName = name[i];
        var tempPrice = price[i].toFixed(2);
        var dish = "\n\t\t<div class=\"" + name + " menu-restaurant\">\n\t\t\t<span class=\"clearfix\">\n\t\t\t<a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">\n\t\t\t" + tempName + "\n\t\t\t</a>\n\t\t\t<span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n\t\t\t<span class=\"menu-price\">\n\t\t\t" + tempPrice + " \u20AC\n\t\t\t</span>\n\t\t\t</span>\n\t\t\t<span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n\t\t</div>\n\t";
        document.getElementById("menu-wrapper").innerHTML += dish;
    }
}
printDish(sandwich, sandwichPrice);
printDish(eggs, eggsPrice);
printDish(coffee, coffeePrice);
printDish(juices, juicesPrice);
//Experiment-----------------------------------------
