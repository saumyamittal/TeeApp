'use strict';

/* App Module */
var designTeeApp = angular.module('designTeeApp', [
  'ngRoute',
  'designTeeControllers',
  'phonecatFilters'
]);


designTeeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashBoardCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);