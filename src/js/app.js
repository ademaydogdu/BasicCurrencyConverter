'use strict';

angular.module('currency_converter', []);
var currency_app = angular.module('currency_app', [
    // Angular modules
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ngStorage',
    'currency_converter'
]);

currency_app.config(function ($routeProvider, $httpProvider, $sceDelegateProvider) {
    $routeProvider.when('/index', { templateUrl: 'index.html', controller: 'CurrencyController' })
        .otherwise({ redirectTo: '/index', templateUrl: 'index.html', controller: 'CurrencyController' });
});


currency_app.run(function ($rootScope, $route, $http, $routeParams, $templateCache) {


});