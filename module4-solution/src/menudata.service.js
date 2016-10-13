(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");;

MenuDataService.$inject = ['$q','$http']

function MenuDataService($q,$http) {
  var service = this;

  service.getAllCategories = function () {
    
    var deferred = $q.defer();

   var response = $http({
      method: "GET",
      url: ("http://davids-restaurant.herokuapp.com/categories.json")
    }).then(function(response) {
       deferred.resolve(response);
       
    },function(response) {
      deferred.reject(response);
      
    });

   

    return deferred.promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();

    var response = $http({
      method: "GET",
      url: ("http://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
    })
    .then(function(response) {
        deferred.resolve(response);
      
    }, function(response) {
        deferred.reject(response);
      
    });

    return deferred.promise;
  };

}


})();
