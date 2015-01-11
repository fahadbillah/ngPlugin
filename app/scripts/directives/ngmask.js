'use strict';

/**
 * @ngdoc directive
 * @name pluginsApp.directive:NgMask
 * @description
 * # NgMask
 */
 angular.module('pluginsApp')
 .directive('ngMask', function () {
 	return {
 		template: '<input type="text" name="" value="{{ smValue }}" placeholder="Number">',
 		restrict: 'E',
 		scope: {
 			smValue: '=value'
 		},
 		link: function(scope,elm,attrs) {
 			elm.on('keyup',function(event) {
 				console.log('wow');
 				scope.smValue = '11111';
 			});
 		}
 	};
 })
 .directive('ngSpinner', [function () {
 	return {
        restrict: 'A',
 		link: function (scope, iElement, iAttrs) {
 			iElement.prepend('<div class="spinner"><img ng-transclude src="../../images/spinner.gif"></div>');
 		}
 	};
 }]);

//    template: '<div></div>',
// 		templateUrl: '../../templateUrl/mask.html',
