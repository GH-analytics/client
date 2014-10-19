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

Services.factory('SignUp', ['$resource',
    function ($resource) {
        return $resource ('../server/public/user', {}, {
            SignUp:  {method: 'POST'}
        });
    }
]);