'use strict';

angular
  .module('profileApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
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
