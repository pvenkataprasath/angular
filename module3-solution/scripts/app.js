( function() {

'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'founditemlist.html',
    scope: {
      items : '<',
      searched : '<',
      onRemove: '&'
    }
   };

  return ddo;
}

function FoundItemsDirectiveController() {

  var items = this;
}


NarrowItDownController.$inject = ['MenuSearchService','$scope'];
function NarrowItDownController(MenuSearchService,$scope) {
	var narrowItDownCntrl = this;
	narrowItDownCntrl.searchTerm = "";
	narrowItDownCntrl.foundResults = [];	
  narrowItDownCntrl.searched = "";

	narrowItDownCntrl.getItems = function() {
    narrowItDownCntrl.searched = "Y";
    narrowItDownCntrl.foundResults = MenuSearchService.getMatchedMenuItems(narrowItDownCntrl.searchTerm);   
	}

	narrowItDownCntrl.removeItem = function(index) {	
    narrowItDownCntrl.foundResults.splice(index,1);
	}
  
}


MenuSearchService.$inject = ['$q','$http'];
function MenuSearchService($q,$http) {
	var service = this;

  service.getMatchedMenuItems = function(searchTerm) {

    var deferred = $q.defer();
    var foundResults = [];

    if(searchTerm == "") {
      return foundResults;
    }

  	
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      
    })
    .then(function(response) {
    	var responseData = response.data.menu_items;
    	responseData.forEach(function(currentItem) {
    		if(currentItem.description.search(searchTerm) != -1) {
    			foundResults.push(currentItem);
    		}
    	})
    	    	
      deferred.resolve(response);
      
    }, function(response) {
        deferred.reject(response);
      
    });

    return foundResults;

  }

   	

}


})();

