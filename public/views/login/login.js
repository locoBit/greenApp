'use strict';

var login = angular.module('login', []);

login.component('login', {
    templateUrl: 'views/login/login.html',
    controller: function($scope, $http, $location) {

      $scope.submit = () => {
        if ($scope.email === 'admin@admin.com') {
          $location.path('/admin');
        }
      };
    }
});
