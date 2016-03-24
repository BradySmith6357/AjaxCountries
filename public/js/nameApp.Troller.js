
angular.module('countriesApp')
	.controller('countroller', ['$scope', '$http', 'countriesFactory', function ($scope, $http, nameFactory){

	$scope.showCountries = function(){
		$http.get('/countries')
			.then(function(returnData){
				$scope.countries = returnData.data
			})
	}

	$scope.searchCountries = function(){
		console.log($scope.countries)
		$http.get('/search', $scope.countries)
	}

}]);