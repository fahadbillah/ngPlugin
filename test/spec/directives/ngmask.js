'use strict';

describe('Directive: NgMask', function () {

  // load the directive's module
  beforeEach(module('pluginsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-ng-mask></-ng-mask>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the NgMask directive');
  }));
});
