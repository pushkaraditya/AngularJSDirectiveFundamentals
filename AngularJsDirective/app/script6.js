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
    var name = "The Emperor";
    return {
      scope: true,
      controller: function ($scope) {
        this.name = name;
      },
      link: function ($scope, el, attrs) {
        el.data('name', name);
      }
    };
  });

  app.directive("vader", function () {
    var name = 'Vader';
    return {
      scope: true,
      require: '^emperor',
      controller: function ($scope) {
        this.name = name;
      },
      link: function ($scope, el, attrs, emperorCtrl) {
        el.data('name', name);
        el.data('master', emperorCtrl.name);
        console.log(name + '\'s master is ' + emperorCtrl.name);
      }
    };
  });

  app.directive("starkiller", function () {
    return {
      scope: true,
      require: '?vader',
      link: function ($scope, el, attrs, vaderCtrl) {
        el.data('name', 'Starkiller');
        if (!!vaderCtrl) {
          el.data('master', vaderCtrl.name);
          console.log('Startkiller\'s master is ' + vaderCtrl.name);
        } else
          console.log('Starkiller doesn\'t have a master');
      }
    };
  });

  app.controller("ctrl6.4", function ($scope) {
    var number = 4;
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