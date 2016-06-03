﻿(function () {
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
    when('/3.:version', {
      templateUrl: 'templates/3.8.html',
      controller: 'ctrl3.8'
    }).
    when('/4', {
      templateUrl: 'templates/4.html',
      controller: 'ctrl4'
    }).
    when('/4.2', {
      templateUrl: 'templates/4.2.html',
      controller: 'ctrl4.2'
    }).
    when('/4.3', {
      templateUrl: 'templates/4.2.html',
      controller: 'ctrl4.2'
    }).
    when('/4.4', {
      templateUrl: 'templates/4.4.html',
      controller: 'ctrl4.4'
    }).
    when('/4.5', {
      templateUrl: 'templates/4.5.html',
      controller: 'ctrl4.5'
    }).
    when('/4.6', {
      templateUrl: 'templates/4.5.html',
      controller: 'ctrl4.5'
    }).
    when('/4.:sNo', {
      templateUrl: 'templates/NA.html',
      controller: 'ctrl4'
    }).
    when('/5', {
      templateUrl: 'templates/5.html',
      controller: 'ctrl5'
    }).
    when('/5.1', {
      templateUrl: 'templates/5.1.html',
      controller: 'ctrl5.1'
    }).
    when('/5.2', {
      templateUrl: 'templates/5.2.html',
      controller: 'ctrl5.2'
    }).
    when('/5.3', {
      templateUrl: 'templates/5.3.html',
      controller: 'ctrl5.3'
    }).
    when('/5.:sNo', {
      templateUrl: 'templates/WIP.html',
      controller: 'ctrl5'
    }).
    otherwise({
        redirectTo: '/'
    });;
  });
}());