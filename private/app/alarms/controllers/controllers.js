/*global ewiApp */

ewiApp.config(function ($routeProvider) {

    $routeProvider.when('/alarms/active',
    {
        templateUrl: '/private/app/alarms/partials/active.html',
        controller:  'ActiveAlarmCtrl'
    });
});

ewiApp.controller("ActiveAlarmCtrl", function($scope) {

    $scope.myRoute = '/alarms/active';

});
