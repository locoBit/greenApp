'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('greenApp', [
  'ngRoute',
  'login',
  'productor',
  'compras',
  'admin'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({enabled:false});

  $routeProvider
      .when('/login',{
          template:'<login></login>'
      })
      .when('/admin',{
          template:'<admin></admin>'
      })
      .when('/productor',{
          template:'<productor></productor>'
      })
      .when('/compras',{
          template:'<compras></compras>'
      })
      .otherwise({redirectTo: '/login'});
}]);
