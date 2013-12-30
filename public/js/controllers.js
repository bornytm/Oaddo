'use strict';

angular.module('localUniverse.controllers', []).

	controller('tempMainCtrl', function ($scope) {
		$scope.hello = "Hi! controller here";
}).

	controller('TabsDemoCtrl', function ($scope) {

	  $scope.tabs = [
      { title:"Dynamic Title 1", content:"Dynamic content 1" },
      { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
    ];
  
    $scope.alertMe = function() {
      setTimeout(function() {
        alert("You've selected the alert tab!");
      });
    };
  
    $scope.navType = 'pills';
});