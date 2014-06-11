'use strict';

angular.module('profileApp')
.controller('WorksCtrl', function ($scope, $http, $filter) {
    $scope.languagesChart = {
        chartType: 'pie',
        config: {
            labels: false,
            title : 'Languages',
            legend : {
                display:true,
                position:'right'
            },
            innerRadius: 0,
            tooltips: true
        },
        data: {data: []}
    };
    $scope.repositoriesChart = {
        chartType: 'pie',
        config: {
            labels: false,
            title : 'Top repositories',
            legend : {
                display:true,
                position:'right'
            },
            innerRadius: 0,
            tooltips: true
        },
        data: {data: []}
    };
    $scope.eventsChart = {
        chartType: 'pie',
        config: {
            labels: false,
            title : 'Activities',
            legend : {
                display:true,
                position:'right'
            },
            innerRadius: 0,
            tooltips: true
        },
        data: {data: []}
    };
    $scope.activitiesChart = {
        chartType: 'bar',
        config: {
            labels: false,
            title : 'Activities',
            legend : {
                display:true,
                position:'right'
            },
            innerRadius: 0,
            tooltips: true
        },
        data: {data: []}
    };
    var i = 0;
    $http({method: 'GET', url: 'http://osrc.dfm.io/nhduy1985.json'}).success(function(data) {
      for (i = 0; i < data.usage.languages.length; i++) {
        //languages
        $scope.languagesChart.data.data.push({
            x: data.usage.languages[i].language,
            y: [data.usage.languages[i].count]
        });
      }
      //repository
      for (i = 0; i < data.repositories.length; i++) {
        $scope.repositoriesChart.data.data.push({
            x: data.repositories[i].repo,
            y: [data.repositories[i].count]
        });
      }
      //events
      for (i = 0; i < data.usage.events.length; i++) {
        var eventLabels = {
            'CreateEvent': 'Create new repo/branch',
            'PushEvent': 'Pushes',
            'ForkEvent': 'Forking',
            'PullRequestEvent': 'Pull requests',
            'WatchEvent': 'Watching'
        };
        $scope.eventsChart.data.data.push({
            x: eventLabels[data.usage.events[i].type],
            y: [data.usage.events[i].total]
        });
      }
    });

    $http({method: 'GET', url: 'https://api.github.com/users/nhduy1985/events'}).success(function(data) {
        var date = '',
            index = -1;
        for (i = 0; i < data.length; i++) {
            if (date !== $filter('date')(data[i].created_at, 'MMM/d/yyyy')) {
                date = $filter('date')(data[i].created_at, 'MMM/d/yyyy');
                $scope.activitiesChart.data.data.push({
                    x: date,
                    y: [1]
                });
                index++;
            }
            else {
                $scope.activitiesChart.data.data[index].y[0]++;
            }
        }
    });

});
