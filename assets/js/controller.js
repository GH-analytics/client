var Controllers = new angular.module('Controllers', []);

Controllers.controller('Main', ['$scope', 'Auth', 'Logout',
	function ($scope, Auth, Logout){

        $scope.auth = Auth.CheckAuth();

        $scope.logout = function () 
        {
            Logout.Logout();
        }

	}
]);

Controllers.controller('Profile', ['$scope', '$location',  'Login', 'SignUp', 'Auth',
    function($scope, $location, Login, SignUp, Auth)
    {
        $scope.location = $location.path() === '/sign-up';

        if(!$scope.location && $scope.auth.email)
            $location.path('/dash');

        $scope.login = function()
        {
            Login.Login($scope.user, function(){
                //success
                console.log("in success");
                $location.path('/dash');
            }, function () {
                console.log("in falure");
            });
        }

        $scope.sign_up = function()
        {
            SignUp.SignUp($scope.user, function(){
                $scope.auth = Auth.CheckAuth();
                $location.path('/dash');
            });
        }
    }
]);

Controllers.controller('Dashboard', ['$scope', '$location',
    function($scope, $location)
    {
        $scope.auth.$promise.then(function(auth){
            if(!('email' in auth))
            {
                $location.path('/');
            }
        });
        
    }
]);

Controllers.controller('FileUpload', [ '$scope', 'FileUploader', 'Upload', 'Sync',
    function($scope, FileUploader, Upload, Sync)
    {
        var uploader = $scope.uploader = new FileUploader({
            url: '/server/public/upload'
        });

        Upload.GetUploads().$promise.then(function(uploads){
            $scope.uploads = uploads;
        });

        $scope.delete = function(file)
        {
            Upload.DeleteFile({id: file.id});
        }

        $scope.sync = function(file)
        {
            Sync.SyncFile({id: file.id});
        }

        // FILTERS
        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    }
]);