'use strict';

angular.module('profileApp')
  .controller('PortfolioCtrl', function ($scope,$location,$http) {
	$http.get('data/linkedin.json').success(function(response) {        
        $scope.projects = response.projects.values;
        $scope.positions = response.positions.values;
    });
	$scope.activeTab = "experiences";
});
