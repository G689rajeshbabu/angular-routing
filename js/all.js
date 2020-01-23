var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "../home.html",
        controller: "homeCtrl"
    };
    var seriveState = {
        name: "serive",
        url: "/serive",
        templateUrl: "../service.html",
        controller: "serviceCtrl"
    };
    var singupState = {
        name: "singup",
        url: "/singup",
        templateUrl: "../singup.html",
        controller: "singupCtrl"
    };
    var singinState = {
        name: "singin",
        url: "/singin",
        templateUrl: "../singin.html",
        controller: "singinCtrl"
    }
    $stateProvider.state(homeState);
    $stateProvider.state(seriveState);
    $stateProvider.state(singupState);
    $stateProvider.state(singinState);
});