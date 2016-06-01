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
    })
    .otherwise({
        redirectTo: '/'
      });;
  });
}());