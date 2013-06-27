/*global angular */

var ewiApp = angular.module("ewi", []);

ewiApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/home', {
        templateUrl: '/private/app/index.html'
    });

    $routeProvider.otherwise({redirectTo: '/home'});

    $locationProvider.html5Mode(true).hashPrefix('!');
});
