'use strict';

(function() {
	var App = window.angular.module('FirstRun',[]);
	App.controller('DisplayController', ['$scope', function($scope){
		$scope.title = 'Angular Works';
	}]);
})();

