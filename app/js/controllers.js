'use strict';

/* Controllers */

var designTeeControllers = angular.module('designTeeControllers', []);

designTeeControllers.controller('DashBoardCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('json/menu.json').success(function(data) {
      $scope.menuItems = data;
    });
    $scope.orderProp = 'age';
	
	$scope.setIncludeItem = function(item) {
      $scope.mainItem = item;
    }
  }]);
  
 designTeeControllers.controller('FabricMenuCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('json/menu.json').success(function(data) {
		$scope.fabricMenuItems = data;
    });
	$scope.menuName = 'FabricMenuName';
  }]);
 
/*
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
	  $scope.mainImageUrl = data.images[0];
    });
	
	$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
	
  }]);
  
  */