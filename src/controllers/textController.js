var myAppModule = angular.module('myApp', []);

myAppModule.controller('TextController', function($scope){
    var someText = {};
    someText.message = 'This is some super new text';
    $scope.someText = someText;
});

