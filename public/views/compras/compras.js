'use strict';

var compras = angular.module('compras', []);

compras.component('compras', {
    templateUrl: 'views/compras/compras.html',
    controller: function($scope, $http, $location, materiasService) {

      $scope.submit = () => {
        if ($scope.email === 'admin@admin.com') {
          $location.path('/admin');
        }
      };
    }
});
