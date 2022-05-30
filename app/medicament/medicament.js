'use strict';

angular.module('myApp.medicament', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/medicament', {
    templateUrl: 'medicament/medicament.html',
    controller: 'medicamentCtrl'
  });
}])

.controller('medicamentCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {

  $scope.addMedicament = function(){
		$scope.msg2="";
		var ref = firebase.database().ref("Medicaments");
		$firebaseArray(ref).$add($scope.medicament)
		.then(
			function(ref){
				$scope.medicament.id = "";
				$scope.medicament.libelle = "";
				$scope.medicament.prix = "";
				$scope.msg2= "Medicament added successfully.";
			},
			function(error){
				console.log(error);
			}
			)
	};
  

}]);