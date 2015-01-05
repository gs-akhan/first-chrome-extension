'use strict';

(function() {
	var App = window.angular.module('FirstRun',[]);
	App.service('TestService', [function () {
		return {
			name : 'SomeValue'
		};
	}]);
	App.controller('DisplayController', ['$scope', 'TestService', function($scope, TestService){
		$scope.title = TestService.name;
	}]);

})();