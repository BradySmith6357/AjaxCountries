
angular.module('countriesApp')
	.controller('countroller', ['$scope', '$http', 'countriesFactory', function ($scope, $http, nameFactory){

	$scope.showCountries = function(){
		$http.get('/countries')
	}

}]);