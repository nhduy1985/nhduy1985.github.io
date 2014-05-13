'use strict';

angular.module('profileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getCommitData = function() {
        IN.API.Profile("me").fields(
                [ "id", "firstName", "lastName", "pictureUrl",
                        "publicProfileUrl" ]).result(function(result) {
            //set the model
            $scope.$apply(function() {
                $scope.jsondata = result.values[0];
                console.log($scope.jsondata);
            });
        }).error(function(err) {
            $scope.$apply(function() {
                $scope.error = err;
            });
        });
    };
  });
