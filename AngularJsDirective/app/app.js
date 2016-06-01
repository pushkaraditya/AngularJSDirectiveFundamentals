(function () {
  var app = angular.module("app", ['ngRoute']);
  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })
    .when('/video', {
      templateUrl: 'templates/video.html',
      controller: 'videoCtrl'
    }).
    when('/3.5', {
      templateUrl: 'templates/3.5.html',
      controller: 'ctrl3.5'
    }).
    when('/3.6', {
      templateUrl: 'templates/3.6.html',
      controller: 'ctrl3.6'
    }).
    when('/3.7', {
      templateUrl: 'templates/3.7.html',
      controller: 'ctrl3.7'
    }).
    when('/3.8', {
      templateUrl: 'templates/3.8.html',
      controller: 'ctrl3.8'
    }).
    when('/3.9', {
      templateUrl: 'templates/3.9.html',
      controller: 'ctrl3.9'
    })
    .otherwise({
        redirectTo: '/'
      });;
  });
}());