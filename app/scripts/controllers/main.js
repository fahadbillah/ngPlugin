'use strict';

/**
 * @ngdoc function
 * @name pluginsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pluginsApp
 */
angular.module('pluginsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
