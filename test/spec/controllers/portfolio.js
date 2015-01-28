'use strict';

describe('Controller: Portfolio', function () {

  // load the controller's module
  beforeEach(module('profileApp'));

  var PortfolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should have projects as default active tab', function () {
    expect(scope.activeTab).toBe('projects');
  });
});
