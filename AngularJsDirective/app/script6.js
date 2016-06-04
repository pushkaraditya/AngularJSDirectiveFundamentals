(function () {
  var app = angular.module("app");
  var chapters = [
    'Introduction',
    'Specifying Controllers',
    'Pre-Link and Post-Link Functions',
    'Requiring a Controller From Another Directive',
    'Requiring Multiple Controllers',
    'Demo- Panel Directive',
    'Summary'
  ];
  var unit = 6;

  app.controller("ctrl6", function ($scope, $routeParams, $location, $timeout) {
    $scope.chapters = chapters;

    $scope.unit = unit;
    $scope.sNo = $routeParams.sNo;
    var idx = $scope.sNo - 1;
    if (idx >= $scope.chapters.length) {
      $scope.error = "Invalid url";
      $timeout(function () {
        $location.path("/6");
      }, 2000);
    } else
      $scope.chapter = $scope.chapters[$scope.sNo - 1];
  });


  app.controller("ctrl6.2", function ($scope) {
    var number = 1;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };


  });


  app.controller("ctrl6.x", function ($scope) {
    var number = 3;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };


  });

}());