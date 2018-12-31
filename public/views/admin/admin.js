'use strict';

var admin = angular.module('admin', []);

admin.component('admin', {
    templateUrl: 'views/admin/admin.html',
    controller: function($scope, $http, $location, materiasService) {

      if ($scope.email === 'admin@admin.com') {
        $location.path('/adimn');
      }
    }
});