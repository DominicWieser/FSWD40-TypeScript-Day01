var options = [];
var sandwich = ["Veggie Sandwich", "Tuna Sandwich", "Lobster Sandwich", "Asian Sandwich", "Farmer Sandwich"];
var eggs = ["Egg Benedict", "Scrambled", "Sunnyside up", "Hard boiled egg", "Soft boiled egg"];
var coffee = ["Espresso", "Cappuccino", "Machiato", "Late Machiato", "Correto"];
var juices = ["Orange Juice", "Apple Juice", "Strawberry Juice", "Protein Juice"];
var sandwichPrice = [7, 12, 15, 13, 10];
var eggsPrice = [10, 7, 5, 4, 4];
var coffeePrice = [3, 4.4, 4.9, 5, 4.5];
var juicesPrice = [4, 3.5, 5.2, 4.9];
var tempClass = ["sandwich", "eggs", "coffee", "juices"];
function printAllDishes() {
    var u = 0;
    function printDish(name, price) {
        // for (let i = 0; i < tempClass.length; ++i) {
        for (var j = 0; j < name.length; ++j) {
            // var tC = tempClass[i]
            var tempName = name[j];
            var tempPrice = price[j].toFixed(2);
            var dish = "\n\t\t\t<div class=\"" + tempClass[u] + " menu-restaurant\">\n\t\t\t\t<span class=\"clearfix\">\n\t\t\t\t<a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">\n\t\t\t\t" + tempName + "\n\t\t\t\t</a>\n\t\t\t\t<span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n\t\t\t\t<span class=\"menu-price\">\n\t\t\t\t" + tempPrice + " \u20AC\n\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n\t\t\t</div>\n\t\t";
            document.getElementById("menu-wrapper").innerHTML += dish;
        }
        ;
        u++;
        // }
    }
    printDish(sandwich, sandwichPrice);
    printDish(eggs, eggsPrice);
    printDish(coffee, coffeePrice);
    printDish(juices, juicesPrice);
}
printAllDishes();
//Experiment-----------------------------------------
