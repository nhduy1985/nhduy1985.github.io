'use strict';

angular
  .module('profileApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angularCharts',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pages/portfolio', {
        templateUrl: function() {
          return 'views/pages/portfolio.html';
        },
        controller: 'MainCtrl'
      })
      .when('/pages/:slug', {
        templateUrl: function(params) {
          return 'views/pages/' + params.slug + '.html';
        },
        controller: 'MainCtrl'
      })
      .when('/works', {
        templateUrl: 'views/pages/works.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('newlines', function () {
    return function(text) {
      if (text) {
          return text.replace(/\n/g, '<br/>');
      }
      return '';
    };
  });
