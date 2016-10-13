(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['item_details'];
function ItemListController(item_details) {
  
  var itemListCtrl = this;
  itemListCtrl.item_details = item_details.data;
 
 }

})();
