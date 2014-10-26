/**
 * Created by Ashley on 10/14/2014.
 */
var Services = angular.module('Services', ['ngResource']);

Services.factory('Login', ['$resource',
    function ($resource) {
        return $resource ('../server/public/login', {}, {
           Login:  {method: 'POST'}
        });
    }
]);

Services.factory('Logout', ['$resource',
    function ($resource) {
        return $resource ('../server/public/logout', {}, {
           Logout:  {method: 'GET'}
        });
    }
]);

Services.factory('SignUp', ['$resource',
    function ($resource) {
        return $resource ('../server/public/user', {}, {
            SignUp:  {method: 'POST'}
        });
    }
]);

Services.factory('Upload', ['$resource',
    function ($resource) {
        return $resource ('../server/public/upload/:id', {}, {
            GetUploads: {method: 'GET', params: {}, isArray: true},
            DeleteUploads: {method: 'DELETE', params: {id: '@id'}}
        });
    }
]);

Services.factory('Sync', ['$resource',
    function ($resource) {
        return $resource ('../server/public/sync/:id', {}, {
            DeleteUploads: {method: 'GET', params: {id: '@id'}}
        });
    }
]);

Services.factory('Auth', ['$resource',
    function ($resource) {
        return $resource ('../server/public/check', {}, {
            CheckAuth: {method: 'GET'}
        });
    }
]);