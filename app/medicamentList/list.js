'use strict';

angular.module("myApp.list", ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/medicamentList', {
    templateUrl: 'medicamentList/medicamentList.html',
    controller: 'medicamentListCtrl'
  });
}])
.controller('medicamentListCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
		  var ref = firebase.database().ref("Medicaments");
		  $scope.data = $firebaseArray(ref);
    	console.log('page1');

      $scope.deleteMedicament = function (info)
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