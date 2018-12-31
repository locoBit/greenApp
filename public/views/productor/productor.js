'use strict';

var productor = angular.module('productor', []);

productor.component('productor', {
    templateUrl: 'views/productor/productor.html',
    controller: function($scope, $http, $location, materiasService) {

      $scope.submit = () => {
        if ($scope.email === 'admin@admin.com') {
          $location.path('/admin');
        }
      };
    }
});