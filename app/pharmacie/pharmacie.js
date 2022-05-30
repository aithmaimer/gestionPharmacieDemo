'use strict';

angular.module('myApp.pharmacie', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pharmacie', {
    templateUrl: 'pharmacie/pharmacie.html',
    controller: 'pharmacieCtrl'
  });
}])

.controller('pharmacieCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {

  $scope.addPharmacie = function(){
		$scope.msg2="";
		var ref = firebase.database().ref("Pharmacies");
		$firebaseArray(ref).$add($scope.pharmacie)
		.then(
			function(ref){
				$scope.pharmacie.id = "";
				$scope.pharmacie.nom = "";
				$scope.msg2= "Pharmacie added successfully.";
			},
			function(error){
				console.log(error);
			}
			)
	};
  

}]);