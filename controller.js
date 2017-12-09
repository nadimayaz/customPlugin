/// <reference path="app.js" />
/// <reference path="service.js" />


app.controller('clothings', function ($scope) {
    $scope.clothings = fetch.clothings(JSONobject);
    $scope.mugs      = fetch.mugs(JSONobject);
});