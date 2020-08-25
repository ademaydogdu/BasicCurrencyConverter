"use strict";
angular.module("currency_converter").controller("CurrencyController", [
    "$scope", "$http", "$filter",
    function ($scope, $http, $filter) {
        $scope.Logs = [];
        $scope.currencyIndex = "USD";
        $scope.currencyIndex2 = "TRY";
        $scope.calculate = function () {
            var access_key = '4295fcd2d10f293cc3d1c5361a1d43f0';
            $http.get('http://api.ratesapi.io/api/latest?base=' + $scope.currencyIndex + '&symbols=' + $scope.currencyIndex2)
                .then(function (res) {
                    var response = res.data.rates[$scope.currencyIndex2];
                    var amount = $scope.amount;
                    var result = parseInt($scope.amount) * parseFloat(response);
                    var date = $filter('date')(new Date(), 'dd-MM-yyyy HH:mm:ss');
                    $scope.Logs.push({
                        'date': date,
                        'amount': $scope.amount + ' ' + $scope.currencyIndex,
                        'result': result + ' ' + $scope.currencyIndex2
                    });
                });
        };
    }
]);