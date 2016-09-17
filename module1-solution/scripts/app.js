( function() {

'use strict';

angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.lunchMessage='';

	$scope.calculateLunch = function()  {
		console.log($scope.dishes);

		if($scope.dishes != null ) {
			var arrayOfDishes = $scope.dishes.split(',');
			if (arrayOfDishes.length <= 3) {
				$scope.lunchMessage='Enjoy!';
			} else {
				$scope.lunchMessage='Too much!';
			}
		} else {
			$scope.lunchMessage='Please enter the dishes you have for lunch';
		}
	}
}
})();

