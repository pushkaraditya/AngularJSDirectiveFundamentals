/*
1. Introduction.mp4
2. The Transclude Function.mp4
3. Demo- Lazy Load Directive.mp4
4. Demo- Recreating ngRepeat.mp4
5. Demo- Business-Specific ngRepeat.mp4
6. The Compile Function.mp4
7. Summary.mp4
*/

(function () {
  var app = angular.module("app");

  var chapters = [
    'Introduction',
    'The Transclude Function',
    'Demo- Lazy Load Directive',
    'Demo- Recreating ngRepeat',
    'Demo- Business-Specific ngRepeat',
    'The Compile Function',
    'Summary'
  ];
  var unit = 5;

  app.controller("ctrl5", function ($scope, $routeParams, $location, $timeout) {
    $scope.chapters = chapters;

    $scope.unit = unit;
    $scope.sNo = $routeParams.sNo;
    var idx = $scope.sNo - 1;
    if (idx >= $scope.chapters.length) {
      $scope.error = "Invalid url";
      $timeout(function () {
        $location.path("/5");
      }, 2000);
    } else
      $scope.chapter = $scope.chapters[$scope.sNo - 1];
  });

  app.controller("ctrl5.1", function ($scope) {
    var number = 1;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.people = [
      'Luke',
      "Han",
      'Anakin'
    ];
  });

  app.controller("ctrl5.2", function ($scope) {
    var number = 2;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.items = [1, 3, 6, 78];
  });

  app.directive("myTransclude", function () {
    return {
      restrict: 'A',
      transclude: 'element',
      link: function (scope, el, attrs, ctrl, transclude) {
        transclude(scope, function (clone, scope) {
          el.before(clone);
        });
      }
    }
  });


  app.controller("ctrl5.x", function ($scope) {
    var number = 3;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };


  });
}());