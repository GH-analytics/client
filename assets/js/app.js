var app = angular.module('app', [
	'ngRoute',
	'Controllers',
    'Services',
    'angularFileUpload'
]);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl:'assets/partials/index.html',
				controller: 'Main'
			}).
			when('/sign-up', {
				templateUrl: 'assets/partials/sign-up.html',
				controller: 'Profile'
			}).
            when('/sign-in', {
                templateUrl: 'assets/partials/sign-in.html',
                controller: 'Profile'
            }).
            when('/upload', {
                templateUrl: 'assets/partials/upload.html',
                controller: 'FileUpload'
            }).
			otherwise({
			 redirectTo: '/'
			})
	}
]);