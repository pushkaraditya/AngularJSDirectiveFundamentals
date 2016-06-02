(function () {
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

  app.controller("ctrl4.2", function ($scope) {
    $scope.message = "This is the message from controller";
    console.log($scope);
  });

  app.directive("displayBox", function () {
    return {
      restrict: "E",
      templateUrl: "templates/displayBox.html",
      controller: function ($scope) {
        $scope.hidden = false;
        $scope.close = function () {
          $scope.hidden = true;
        };
        $scope.message = "I'm hijaking you!";
        console.log($scope);
      },
      transclude: true,
      scope: {}
    };
  });

  app.controller("ctrl4.4", function ($scope) {
    $scope.answer = { baseLocation: "Yavin 4" };
  });

  app.directive("myQuestion", function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/myQuestion.html',
      scope: {
        questionText: "@q"
      }
    };
  });

  app.controller("ctrl4.5", function ($scope) {
    $scope.luke = {
      name: "Luke Skywalker",
      address: {
        street: 'PO Box 123',
        city: 'Street Rebel Base',
        planet: 'Yavin 4'
      },
      friends: [
        'Han',
        'Leia',
        'Chewbacca'
      ],
      level: 0
    };
    $scope.han = {
      name: "Han Solo",
      address: {
        street: 'PO Box 123',
        city: 'Mos Eisley',
        planet: 'Tattoine'
      },
      friends: [
        'Luke',
        'Leia',
        'Chewbacca'
      ],
      level: 1
    };
    $scope.droid1 = {
      name: 'R2-D2',
      specifications: {
        manufacturer: 'Industrial Automation',
        type: 'Astromech',
        productLine: 'R2 series'
      },
      level: 2
    };
  });

  app.directive("userPanel", function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/userPanel.html',
      scope: {
        name: '@',
        level: '=',
        initialCollapsed: '@collapsed'
      },
      controller: function ($scope) {

        $scope.collapsed = ($scope.initialCollapsed === 'true');
        $scope.collapse = function () {
          $scope.collapsed = !$scope.collapsed;
        };

        $scope.nextState = function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          $scope.level++;
          $scope.level = $scope.level % 4;
        };

      }
    };
  });

  app.directive("personInfoCard", function () {
    return {
      templateUrl: "templates/userInfoCard.html",
      restrict: "E",
      scope: {
        user: '=person',
        initialCollapsed: '@collapsed'
      },
      controller: function ($scope) {
        $scope.knightMe = function (user) {
          user.rank = "Knight";
        };
        $scope.removeFriend = function (friend) {
          var idx = $scope.user.friends.indexOf(friend);
          if (idx > -1) {
            $scope.user.friends.splice(idx, 1);
          }
        };
      }
    };
  });

  app.directive("droidInfoCard", function () {
    return {
      templateUrl: "templates/droidInfoCard.html",
      restrict: "E",
      scope: {
        droid: '=droid',
        initialCollapsed: '@collapsed'
      },
      controller: function ($scope) {
      }
    };
  });

}());