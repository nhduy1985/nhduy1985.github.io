'use strict';

angular.module('profileApp')
  .controller('HtmlCtrl', function ($scope,$location) {
	randomizeTheme(); 
	$scope.$on('$locationChangeStart', function (event, next, current) {
        if ($location.path() === '/') {
        	randomizeTheme();
        }
    });

    function randomizeTheme() {
    	var themes = [
    		{ className:"theme1", isInvert: true }, //1
    		{ className:"theme2", isInvert: true }, //1
    		{ className:"theme3", isInvert: false }, //1
    		{ className:"theme4", isInvert: true }, //1
    		{ className:"theme5", isInvert: false } //1
    	];
    	var index = Math.floor((Math.random() * 5));
    	var theme = themes[index];
    	$scope.themeName = theme.className;
    	$scope.isThemeInverted = theme.isInvert;
    }
});
