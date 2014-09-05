'use strict';

/* Controllers */

var designTeeControllers = angular.module('designTeeControllers', []);


designTeeControllers.controller('DashBoardCtrl', ['$scope', '$http', 'greeter', 'cartService',
  function($scope, $http, greeter, cartService) {
    $http.get('json/menu.json').success(function(data) {
      $scope.menuItems = data;
	  $scope.selectedMenuItem = data[0];
    });
    $scope.orderProp = 'age';
	$scope.isEnableHover={
              fabric: false,
              structure: false,
              accent: false
        }
	
	$scope.setIncludeItem = function(item) {
      $scope.mainItem = item;
	  //greeter.updateContent(item.name);
    };
	
	$scope.enableToolTip = function(item) {
		$scope.isEnableHover[item] = true;
	};
	
	$scope.disableToolTip = function(item) {
		$scope.isEnableHover[item] = false;
	};
	
	$scope.defaultTee = greeter.getTeeDeatails();
	
	
	$scope.sayHello = function() {
		greeter.greet('Hello World');
	};
	
	$scope.addToCart = function(item){
		cartService.addToCart(item);
		$scope.cartItems = cartService.getCart();
		$scope.bagSize = cartService.getTotalItems();
	};
	
	$scope.getCart = function(){
		$scope.cartItems = cartService.getCart();
	};
	
	$scope.bagSize = cartService.getTotalItems();
	
  }]);
  
 designTeeControllers.controller('FabricMenuCtrl', ['$scope', '$http', 'greeter',
  function($scope, $http, greeter) {
    $http.get('json/fabric.json').success(function(data) {
		$scope.fabricList = data;
    });
	
	$scope.sayHello = function() {
		greeter.greet2('Hello World');
	};
	
	$scope.updateFabric = function(fabric) {
		greeter.updateFabric(fabric);
	};
	
	//$scope.defaultTee1 = $scope.defaultTee;
	
	$scope.showSelectedFabric = function(fabric){
		if(fabric.id == $scope.defaultTee.fabric.id)
			return true;
		else
			return false;
	};
	
	greeter.loadScroller();
	
  }]);
  
 designTeeControllers.service('greeter', function($window) {
	
	var teeDetails = {
		"Id": "on",
		"fabric": {
			"id": "3080",
			"price": "2100"
		},
		"Structure": { 
			"Collar": "CollarId1",
			"CollarType": "CollarType1",
			"Placket": "Placket1",
			"Sleeve": "Sleeve1",
			"Pocket": "Pocket1",
			"Pleats": "Pleats1"
		},
		"Accents": {
			"fabric": "Accent_Fabric",
			"Button": "Button1",
			"Tapes": "Tape1"
		}
	};
	
	this.greet = function(text) {
		$window.alert(text);
		return 'Hii 1';
	}
	
	this.greet2 = function(text) {
		$window.alert('new'+text);
		return 'Hii 2';
	} 
	
	this.getTeeDeatails = function(){
		return teeDetails;
	}
	
	this.updateContent = function(text){
		contacts.name = text;
	}
	
	this.updateFabric = function(fabric){
		teeDetails.fabric = fabric;
	}
	
	this.loadScroller = function(){
		var tets = $('#inclThumbnailTPL');
		var isScrollExist = $('.enscroll-track').length;
		if(isScrollExist==0){
			$('#image_box').enscroll({
				verticalTrackClass: 'track4',
				verticalHandleClass: 'handle4',
				minScrollbarLength: 28
			});
		}
		$('#cart_box').enscroll({
			verticalTrackClass: 'track4',
			verticalHandleClass: 'handle4',
			minScrollbarLength: 28
		});
	}
  
});


designTeeControllers.service('cartService', function($window) {
	
	var cartDetails = []; 
	
	this.getCart = function(){
		return cartDetails;
	};
	
	this.addToCart = function(item){
		cartDetails.push(item);
	};
	
	this.getTotalItems = function(){
		return cartDetails.length;
	};
  
});
 
/* 
  designTeeControllers.factory('greeter', function($window) {
	
	var factory = {};
	factory.greet = function(text) {
		$window.alert(text);
	}
	
	factory.greet2 = function(text) {
		$window.alert('new'+text);
	}
	return factory;

  
  
});
*/

 
