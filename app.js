
/// <reference path="angular.min.js" />
/// <reference path="service.js" />

var app = angular.module('myApp', []);

var content;
app.controller("test", function ($scope) {
    $scope.content = customPlugin("clothings", "tshirt");
    console.log($scope.content.products._color);
    console.log($scope.content.products._size);
    console.log($scope.content.products._design);
    $scope.color = $scope.content.products._color;
    $scope.size = $scope.content.products._size;
    $scope.design = $scope.content.products._design;
});



