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


  app.controller("ctrl6.3", function ($scope) {
    var number = 3;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };
  });

  app.directive("emperor", function () {
    return {
      scope: true,
      link: {
        pre: function ($scope, el, attrs) {
          el.data('name', 'The Emperor');
          $scope.master = "The Emperor";
        }
      }
    };
  });

  app.directive("vader", function () {
    return {
      scope: true,
      link: {
        pre: function ($scope, el, attrs) {
          el.data('name', 'Vader');
          el.data('master', $scope.master);
          console.log('Vader\'s master is ' + $scope.master);
          $scope.master = 'Vader';
        }
      }
    };
  });

  app.directive("starkiller", function () {
    return {
      scope: true,
      link: function ($scope, el, attrs) {
        el.data('name', 'Starkiller');
        el.data('master', $scope.master);
        console.log('Startkiller\'s master is ' + $scope.master);
      }
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