/**
 * Created by MOAB on 16-Aug-17.
 */
var app = angular.module('myApp', []);

app.controller('appController', ['$scope', function ($scope) {

    $scope.data = "Hello World";

    $scope.buttons = ["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "/", "0", ".", "=", "+", "C"];


    $scope.value = "";

    $scope.getData = function (btn) {
        var value = function () {
            this.value1 = 0;
            this.value2 = 0;
        };

        var newValue = new value();

        if (btn == "C") {
            $scope.value = "";
        }
        else if (btn == "+") {
            newValue.value1 = $scope.value;
            console.log('Value1', newValue.value1);
            $scope.value = "";
        } else if (btn == "=") {
            newValue.value2 = $scope.value;
            console.log('Value1', newValue.value1);
            console.log('Value2', newValue.value2);
            $scope.value = "";
            $scope.value = newValue.value1 + newValue.value2;
        }
        else {
            $scope.value += btn;
        }
    }
}]);