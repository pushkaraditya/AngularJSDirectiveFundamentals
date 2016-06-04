(function () {
  var app = angular.module("app");
  var chapters = [
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
      require: ['^vader', '^emperor'],
      link: function ($scope, el, attrs, ctrls) {
        el.data('name', 'Starkiller');
        if (!!ctrls[0]) {
          el.data('master', ctrls[0].name);
          console.log('Startkiller\'s master is ' + ctrls[0].name);
          console.log('Startkiller\'s master\'s master is ' + ctrls[1].name);
        } else
          console.log('Starkiller doesn\'t have a master');
      }
    };
  });

  app.controller("ctrl6.4", function ($scope, $location) {
    var number = $location.path().split('.')[1] - 0;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };
  });


  app.controller("ctrl6.6", function ($scope, $location) {
    var number = $location.path().split('.')[1] - 0;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };


  });

  app.directive("swTabstrip", function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function ($scope) {
        $scope.panes = [];
        $scope.select = function (pane) {
          pane.selected = true;
          $scope.panes.forEach(function (curPane) {
            if (curPane !== pane) {
              curPane.selected = false;
            }
          });
        };

        this.addPane = function (pane) {
          $scope.panes.push(pane);
          if ($scope.panes.length === 1)
            pane.selected = true;
        };
      },
      templateUrl: 'templates/swTabstrip.html'
    };
  });

  app.directive("swPane", function () {
    return {
      restruct: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      require: '^swTabstrip',
      link: function (scope, el, attrs, tabstripCtrl) {
        tabstripCtrl.addPane(scope);
      },
      templateUrl: 'templates/swPane.html'
    };
  });


  app.controller("ctrl6.x", function ($scope) {
    var number = $location.path().split('.')[1] - 0;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };


  });

}());