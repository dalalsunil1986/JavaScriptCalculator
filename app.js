/**
 * Created by MOAB on 16-Aug-17.
 */
var app = angular.module('myApp', []);

app.controller('appController', ['$scope', function ($scope) {

    $scope.data = "Hello World";
    $scope.value = "";
    $scope.buttons = ["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "/", "0", ".", "=", "+", "C"];
    $scope.getData = function (btn) {
        if (btn == "C") {
            $scope.value = "";
        }
        else if (btn == "+") {
            $scope.value1 = $scope.value;
            $scope.reset();
        } else if (btn == "-") {
            $scope.value1 = $scope.value + "-";
            $scope.reset();
        } else if (btn == "=") {
            $scope.value2 = $scope.value;
            $scope.reset();
            console.log('Value1', $scope.value1)
            console.log('Value2', $scope.value2)
            console.log('parseInt Value1', parseInt($scope.value1))
            $scope.value = parseInt($scope.value1) + parseInt($scope.value2);
        }
        else {
            $scope.value += btn;
        }
    };

    $scope.reset = function () {
        $scope.value = "";
    }
}]);