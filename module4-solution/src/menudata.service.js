(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q','$http','ApiBasePath']

function MenuDataService($q,$http,ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    
    var deferred = $q.defer();

   var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
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
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
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
