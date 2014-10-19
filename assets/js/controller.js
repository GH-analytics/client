var Controllers = new angular.module('Controllers', []);

Controllers.controller('Main', ['$scope', '$location', '$timeout',
	function ($scope, $location, $timeout){
		
	}
]);

Controllers.controller('Profile', ['$scope', 'Login', 'SignUp',
    function($scope, Login, SignUp)
    {
        $scope.login = function()
        {
            console.log("here");
            Login.Login($scope.user);
        }

        $scope.sign_up = function()
        {
            console.log("in sign in");
            SignUp.SignUp($scope.user);
        }
    }
]);

Controllers.controller('FileUpload', [ '$scope', 'FileUploader',
    function($scope, FileUploader)
    {
        $scope.uploader = new FileUploader({url: '/server/public/upload'});
    }
]);