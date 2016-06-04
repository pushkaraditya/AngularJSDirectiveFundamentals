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


  app.controller("ctrl7.3", function ($scope, $location) {
    var number = $location.path().split('.')[1] - 0;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.users = [
      { name: 'Luke', planet: 'Tatooine', job: 'Jedi' },
      { name: 'Han', planet: 'Nowhere', job: 'Jedi' },
      { name: 'Chewbacca', planet: 'Kashyyyk', job: 'CoPilot' },
    ];
  });

  app.directive("masterUsers", function () {
    return {
      scope: {
        users: '=data',
        selectedUser:'='
      },
      templateUrl: 'templates/masterUsers.html',
      controller: function ($scope) {
        $scope.selectedUser = $scope.users[0];

        $scope.selectUser = function (user) {
          $scope.selectedUser = user;
        };
      }
    };
  });

  app.directive("detailUsers", function () {
    return {
      scope: {
        users: '=data',
        selectedUser: '='
      },
      templateUrl: 'templates/detailUsers.html'
    };
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