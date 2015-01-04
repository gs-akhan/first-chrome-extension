'use strict';

(function() {
	var App = window.angular.module('FirstRun',[]);
	App.value('TestValue', {
		name : 123
	});
	
	App.controller('DisplayController', ['$scope', 'TestValue', function($scope, TestValue){
		$scope.title = TestValue.name;
	}]);

})();