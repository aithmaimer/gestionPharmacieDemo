'use strict';

angular.module('myApp.editmedicament', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editmedicament/:id', {
	   
    templateUrl: 'editmedicament/editmedicament.html',
    controller: 'editmedicamentCtrl'
  });
}])

.controller('editmedicamentCtrl',
function($scope,$firebaseArray,$firebaseObject,$routeParams) {

	var id = $routeParams.id;
	var ref = firebase.database().ref("Medicaments/"+id);

	$scope.medicament = $firebaseObject(ref);

	$scope.editMedicament= function(id)
	{
		var ref = firebase.database().ref("Medicaments/"+id);
		console.log(id);
		ref.update({
			id:$scope.medicament.id,
			libelle:$scope.medicament.libelle,
			prix:$scope.medicament.prix,
		}).then(
			function (ref)
			{
				$scope.medicament.id="";
				$scope.medicament.libelle="";
				$scope.medicament.prix="";
			}
			,function(error)
			{
				console.log(error);
			}
			
		);
		
	}
	
  
  

});