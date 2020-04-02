var app = angular.module('onload', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomePage',
            templateUrl: 'views/main.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});