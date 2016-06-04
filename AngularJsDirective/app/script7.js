(function () {
  var app = angular.module("app");
  var chapters = [
    'Introduction',
    'Extracting Services',
    'Using Services to Communicate Between Directives',
    'Directives That Should Be Services',
    'Creating a Modal Directive',
    'Using a Modal Directive',
    'Using a Modal Service',
    'Summary',
    'Course Summary'
  ];
  var unit = 7;

  app.controller("ctrl7", function ($scope, $routeParams, $location, $timeout) {
    $scope.chapters = chapters;

    $scope.unit = unit;
    $scope.sNo = $routeParams.sNo;
    var idx = $scope.sNo - 1;
    if (idx >= $scope.chapters.length) {
      $scope.error = "Invalid url";
      $timeout(function () {
        $location.path("/7");
      }, 2000);
    } else
      $scope.chapter = $scope.chapters[$scope.sNo - 1];
  });


  app.controller("ctrl7.x", function ($scope, $location) {
    var number = $location.path().split('.')[1] - 0;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };


  });
}());