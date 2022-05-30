'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'firebase',
  'myApp.list',
  'myApp.medicament',
  'myApp.editmedicament',
  'myApp.pharmacie',
  'myApp.pharmacielist',
  'myApp.editpharmacie'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/medicamentlist'});
}]);
