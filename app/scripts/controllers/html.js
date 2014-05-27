'use strict';

angular.module('profileApp')
  .controller('HtmlCtrl', function ($scope,$location) {
    function randomizeTheme() {
        var themes = [
            { className:'theme1', isInvert: true }, //1
            { className:'theme2', isInvert: true }, //1
            { className:'theme3', isInvert: false }, //1
            { className:'theme4', isInvert: true }, //1
            { className:'theme5', isInvert: false },
            { className:'theme6', isInvert: false } //1
        ];
        var index = Math.floor((Math.random() * themes.length));
        var theme = themes[index];
        //Demo only
        //theme.className = 'theme6';
        //theme.isInvert = false;
        $scope.themeName = theme.className;
        $scope.isThemeInverted = theme.isInvert;
    }

    randomizeTheme();
    $scope.$on('$locationChangeStart', function () {
        if ($location.path() === '/') {
            randomizeTheme();
        }
    });


});
