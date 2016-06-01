﻿(function () {
  var app = angular.module('app');

  var chapters = [
    'Introduction',
    'Basic Transclusion',
    'Transclusion and Scopes',
    'Demo- Questionnaire Directive',
    'Reusing HTML With Transclusion - Problem',
    'Reusing HTML With Transclusion - Solution',
    'Summary'
  ];

  app.controller("ctrl4", function ($scope, $routeParams, $location, $timeout) {
    // this is basic controller, might help to avoid duplicate routing based code. This section should work as landing page for Chapter 4 exercises
    $scope.sNo = $routeParams.sNo;
    var idx = $scope.sNo - 1;
    if (idx >= chapters.length) {
      $scope.error = "Invalid url";
      $timeout(function () {
        $location.path("/4");
      }, 2000);
    } else
      $scope.chapter = chapters[$scope.sNo - 1];
  });
}());