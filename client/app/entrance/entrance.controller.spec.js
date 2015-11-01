'use strict';

describe('Controller: EntranceCtrl', function () {

  // load the controller's module
  beforeEach(module('entranceApp'));

  var EntranceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntranceCtrl = $controller('EntranceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
