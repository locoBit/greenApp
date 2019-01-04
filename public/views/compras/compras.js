'use strict';

var compras = angular.module('compras', []);

compras.component('compras', {
    templateUrl: 'views/compras/compras.html',
    controller: function($scope, $http) {

        $scope.buscarProductor = () => {
            const { folio } = $scope;

            $http.get(`http://127.0.0.1:3000/api/productores/folio/${folio}`)
                .then((res) => {
                    console.log(res);
                });
        };
    }
});
