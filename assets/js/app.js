var app = angular.module('app', [
	'ngRoute',
	'Controllers'
]);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl:'assets/partials/index.html',
				controller: 'Main'
			}).
			otherwise({
			 redirectTo: '/'
			})
	}
]);