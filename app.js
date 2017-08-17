/**
 * Created by MOAB on 16-Aug-17.
 */
var app = angular.module('myApp', []);

app.controller('appController', ['$scope', function ($scope) {

    $scope.value = "";
    $scope.buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "C"];
    $scope.operators = ["*", "/", "-", "+"];
    $scope.numbFun = function (btn) {
        if (btn == "C") {
            $scope.value = "";
        } else {
            $scope.value += btn;
        }
    };
    $scope.optFun = function (opt) {
        $scope.opt = opt;
        $scope.num1 = $scope.value;
        $scope.reset();
    };

    $scope.equals = function () {
        $scope.num2 = $scope.value;
        $scope.value = $scope.calculate(parseInt($scope.num1), parseInt($scope.num2), $scope.opt);
    };
    $scope.reset = function () {
        $scope.value = "";
    };

    $scope.calculate = function (num1, num2, opt) {
        switch (opt) {
            case "+" :
                console.log('Add : ', num1 + num2);
                return num1 + num2;
            case "-" :
                console.log('Sub : ', num1 - num2);
                return num1 - num2;
            case "*":
                console.log('Mul : ', num1 * num2);
                return num1 * num2;
            case "/":
                console.log('Div : ', num1 / num2);
                return num1 / num2;
        }
    }
}]);