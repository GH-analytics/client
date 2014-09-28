var Controllers = new angular.module('Controllers', []);

Controllers.controller('Main', ['$scope', '$location', '$timeout',
	function ($scope, $location, $timeout){
		$scope.page = $location['$$url'];
		
		$scope.refresh = function()
		{
			setTimeout(function () {
				$scope.$apply(function(){
					$scope.page = $location['$$url'];
				});			
			}, 100);
			console.log("in here");
		}

		//$scope.page = $location['$$url'] == '/' ;
		//$scope.$apply;

		console.log($scope.page);
		
	}
]);