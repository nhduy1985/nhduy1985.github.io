'use strict';

angular.module('profileApp')
  .controller('PortfolioCtrl', function ($scope,$location,linkedinService,dataService) {
	linkedinService().success(function(response) {        
        $scope.projects = response.projects.values;
        $scope.positions = response.positions.values;
        $scope.linkedinPublicProfileUrl = response.publicProfileUrl;        
    });
    dataService().success(function(response) {
        $scope.getCompanyLink = function(companyName) {
        	for (var i = 0; i < response.companies.length; i++) { 
			    if (response.companies[i].name === companyName) {
        			return response.companies[i].url;
        		} 
			}
        	//else
        	return "#";	
        	
        }
    });
	$scope.activeTab = "experiences";
});
