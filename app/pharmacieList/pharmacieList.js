'use strict';

angular.module("myApp.pharmacielist", ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pharmacieList', {
    templateUrl: 'pharmacieList/pharmacieList.html',
    controller: 'pharmacieListCtrl'
  });
}])
.controller('pharmacieListCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
		  var ref = firebase.database().ref("Pharmacies");
		  $scope.data = $firebaseArray(ref);
    	console.log('page1');

      $scope.deletePharmacie = function (info)
      {
        $scope.data.$remove(info)
        .then(
          function(ref)
          {
            console.log(info);
          },
          function(error)
          {
            console.log(error);
          }
        );
       
      }
		 
	
  
  }]);