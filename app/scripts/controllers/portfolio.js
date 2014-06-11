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
            return _getCompanyLink(companyName,response);
        };
        _mergeProjectData(response);
    });

    function _mergeProjectData(data) {
        for (var i = 0; i < $scope.projects.length; i++) {
            var id = $scope.projects[i].id;
            if (data.projects[id] !== undefined) {
                //Merge highlight
                $scope.projects[i].highlight = data.projects[id].highlight || false;
                //Merge tags
                var tags = data.projects[id].tags;
                $scope.projects[i].tags = [];
                for (var j = 0; j < tags.length; j++) {
                    var tag = data.projects[id].tags[j];
                    if (data.technicals[tag] !== undefined) {
                        $scope.projects[i].tags.push(data.technicals[tag]);
                    }
                }
            }
        }
    }

    function _getCompanyLink(companyName, data) {
        for (var i = 0; i < data.companies.length; i++) {
            if (data.companies[i].name === companyName) {
                return data.companies[i].url;
            }
        }
        //else
        return '#';
    }

    $scope.activeTab = 'projects';
});
