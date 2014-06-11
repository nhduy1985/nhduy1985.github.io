'use strict';

angular.module('profileApp')
  .controller('MenuCtrl', function ($scope,$location) {
	$scope.menus = [
		{title:'Home', href:'/', id:'home-item'},
		//{title:'About me', href:'/pages/about'},
		//{title:'Works', href:'/pages/works'},
		{title:'Works', href:'/works'},
		{title:'Portfolio', href:'/pages/portfolio'}
	];
	$scope.isActive = function(item) {
      if (item.href === $location.path()) {
        return true;
      }
      return false;
    };
});
