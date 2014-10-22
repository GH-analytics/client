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
				templateUrl: 'assets/partials/user.html',
				controller: 'Profile'
			}).
            when('/sign-in', {
                templateUrl: 'assets/partials/user.html',
                controller: 'Profile'
            }).
            when('/upload', {
                templateUrl: 'assets/partials/upload.html',
                controller: 'FileUpload'
            }).
            when('/dash', {
                templateUrl: 'assets/partials/dash.html',
                controller: 'Dashboard'
            }).
			otherwise({
			 redirectTo: '/'
			})
	}
]);