'use strict';

angular.module('profileApp')
  .factory('linkedinService', function($http,$firebase) {
	  var promise = null;

	  return function() {
	    if (promise) {
	      // If we've already asked for this data once,
	      // return the promise that already exists.
	      return promise;
	    } else {
	      //promise = $http.get('data/linkedin.json');
	      var sync = $firebase(new Firebase("https://vivid-torch-9106.firebaseio.com/likendin"));  
	      promise = sync.$asObject.$loaded();
	      return promise;
	    }
	  };
  });