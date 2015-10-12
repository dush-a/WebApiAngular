(function () {
    'use strict';
    angular.module('app')
    .controller('homeCtrl', ['$scope', '$cookies', '$http', 'ProductService', '$location', function homeCtrl($scope, $cookies, $http, ProductService, $location) {
        $scope.products = [];

        activate();

        function activate() {
            $scope.getProducts();
        }

        $scope.getProducts = function () {
            ProductService.getProducts().then(function (response) {
                $scope.products = response.data;
            }, function (err) {
                alert(err);
            });
        };
    }])
    .service('ProductService', ['$http', function ($http) {
        this.getProducts = function () {
            return $http.get('/api/ProductAPI');
        };
    }]);
})();