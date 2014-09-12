var Controllers = new angular.module('Controllers', []);

Controllers.controller('Main', ['$scope', '$location',
	function ($scope, $location){

		$scope.page = $location['$$url'] == '/' ;
		console.log($scope.page);
		
	}
]);