(function () {
    'use strict';
    angular.module('app')
    .controller('mainCtrl', ['$scope', '$cookies', function mainCtrl($scope, $cookies) {
    
        $scope.templates = [
               { name: 'productGrid.cshtml', url: '/Home/Template/template1' },
               { name: 'productList.cshtml', url: '/Home/Template/template2' },
               { name: 'productTable.cshtml', url: '/Home/Template/template3' }
        ];

        var lastSelectedTemplate = $cookies.get('lastSelectedTemplate2');
        if (lastSelectedTemplate == null) {
            $cookies.put('lastSelectedTemplate2', '0');
        };
        $scope.templateSelected = $scope.templates[$cookies.get('lastSelectedTemplate2')];

        $scope.showProductGrid = function showGrid() {
            $scope.templateSelected = $scope.templates[0];
            $cookies.put('lastSelectedTemplate2', 0);
        };
        $scope.showProductList = function showList() {
            $scope.templateSelected = $scope.templates[1];
            $cookies.put('lastSelectedTemplate2', 1);
        };
        $scope.showProductTable = function showTable() {
            $scope.templateSelected = $scope.templates[2];
            $cookies.put('lastSelectedTemplate2', 2);
        };

        $scope.products = [];
        $scope.products = [{ Id: '1', ProductName: "pqr", Description: 'This is the first product', DefaultPictureUrl: '/Contents/Images/Desktop.png' },
                            { Id: '2', ProductName: "uvw", Description: 'This is the secod product', DefaultPictureUrl: '/Contents/Images/Internet.png' },
                            { Id: '3', ProductName: "xyz", Description: 'This is the third product', DefaultPictureUrl: '/Contents/Images/Run.png' }];

    }]);

})();