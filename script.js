
//market object holds all fruit prices updated by the random fruit function
var market={
	apple:5,
	orange:5,
	banana:5,
	pears:5
};
// user object holds account of each fruit purchased average price value and cash
var user={

	apple:{
		num:0,
		avePrice:0
	},
	orange:{
		num:0,
		avePrice:0
	},
	banana:{
		num:0,
		avePrice:0
	},
	pears:{
		num:0,
		avePrice:0

	},
	cash:100
}; 
console.log(market);
console.log(user);

$(document).ready(function(){
	// this function sets the p tag for cash to the value in the user object

	$('.cash').children('p').text(user.cash);
//this function calls populate market DOM every 15 secs
	setInterval(function () {populateMarketDOM()},15000);
//event listener for the button click 	
	$('.market').on('click','button',function(){
// get the button name from the button tag and calls buyfruit
		buyFruit($(this).data('name'));
// this function sets the p tag for cash to the value in the user object	
		$('.cash').children('p').text(user.cash);


	});
});
// calls populate market and updates DOM in each of the price for the fruit sections
function populateMarketDOM(){
	populateMarket(market);
	$(".appleprice").text(market.apple);
	$(".orangeprice").text(market.orange);
	$(".bananaprice").text(market.banana);
	$(".pearsprice").text(market.pears);

};

// iterates through the market object, runs random fruit and updates the fruit 
//object with new price
function populateMarket(object){
	for (var fruit in object) {
		object[fruit] = randomFruit(object[fruit]);
	}
	
	//object.apple=randomFruit(object.apple);
	// console.log("populate market function object", object);

};

function randomFruit(price){
	var number=randomNumber(-50,50);

	 price=price+number/100;
	 if (price > 9.99) {
	 	price =  9.99;
	 }
	 else if (price <.50 ){
	 	price=.50;

	 }
	 
	 return parseFloat(price.toFixed(2));

};

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
function buyFruit(clickedButton){

	switch(clickedButton) {
    case "appleButton":
       {
       	user.apple.num++;
       	user.cash -= market.apple;

       }
        break;
    case "orangeButton":
        {	
        	user.orange.num++;
       		user.cash -= market.orange;}
        break;
    case "bananasButton":
        {	
        	user.banana.num++;
       		user.cash -= market.banana;}
        break;
    case "pearsButton":
        {
        	user.pears.num++;
       		user.cash -= market.pears;
        }
        break;
  
}

	console.log("this is user",user);
console.log("this is the fruit ",clickedButton);
};

