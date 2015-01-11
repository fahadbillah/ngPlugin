'use strict';

/**
 * @ngdoc function
 * @name pluginsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pluginsApp
 */
angular.module('pluginsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
