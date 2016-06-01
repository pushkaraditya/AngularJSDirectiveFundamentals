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
    })
    .otherwise({
        redirectTo: '/'
      });;
  });
}());