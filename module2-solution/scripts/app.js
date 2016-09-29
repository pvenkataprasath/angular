( function() {

'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuyCtrl = this;
	
	toBuyCtrl.buyItems = ShoppingListCheckOffService.getToBuyItems();

	toBuyCtrl.boughtClicked = function (index)  {		
		ShoppingListCheckOffService.removeToBuyItems(index);
	}
  
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

	var alreadyBoughtCtrl = this;	
	alreadyBoughtCtrl.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();  
}


function ShoppingListCheckOffService() {
	var service = this;

   	var toBuyItems = [
  		{name: "cookies", quantity: 10},
  		{name: "mangoes", quantity: 15},
  		{name: "apples", quantity: 20},
  		{name: "oranges", quantity: 25},
  		{name: "candies", quantity: 30}
  	];

  	var alreadyBoughtItems = [];
 
  	service.getToBuyItems = function () {
    	return toBuyItems;
  	};

  	service.getAlreadyBoughtItems = function () {
    	return alreadyBoughtItems;
  	};

  	service.removeToBuyItems = function(itemIdex) {
  		alreadyBoughtItems.push(toBuyItems[itemIdex]);
  		toBuyItems.splice(itemIdex, 1);
  	};

}


})();

