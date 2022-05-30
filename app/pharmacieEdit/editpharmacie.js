'use strict';

angular.module('myApp.editpharmacie', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editpharmacie/:id', {
	   
    templateUrl: 'pharmacieEdit/editpharmacie.html',
    controller: 'editpharmacieCtrl'
  });
}])

.controller('editpharmacieCtrl',
function($scope,$firebaseArray,$firebaseObject,$routeParams) {

	var id = $routeParams.id;
	var ref = firebase.database().ref("Pharmacies/"+id);

	$scope.pharmacie = $firebaseObject(ref);
	console.log(id);

	$scope.editPharmacie= function(id)
	{
		var ref = firebase.database().ref("Pharmacies/"+id);
		console.log(id);
		ref.update({
			id:$scope.pharmacie.id,
			nom:$scope.pharmacie.nom,
			
		}).then(
			function (ref)
			{
				$scope.pharmacie.id="";
				$scope.pharmacie.nom="";
				
			}
			,function(error)
			{
				console.log(error);
			}
			
		);
		
	}
	
  
  

});