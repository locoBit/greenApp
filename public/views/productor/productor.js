'use strict';

var productor = angular.module('productor', []);

productor.component('productor', {
    templateUrl: 'views/productor/productor.html',
    controller: function($scope, $http) {

        $scope.guardarProductor = () => {
            const { productor, predio } = $scope;
            const request = {
                productor,
                predio
            };

            $http.post('http://127.0.0.1:3000/api/productores/', request)
                .then((res) => {
                    console.log(res);
                });
        };
    }
});
