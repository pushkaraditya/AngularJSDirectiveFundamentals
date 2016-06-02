(function () {
  var mainCtrl = function ($scope) {
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
  };

  var app = angular.module("app");
  app.controller("mainCtrl", mainCtrl);

  app.directive("userInfoCard", function () {
    return {
      templateUrl: "templates/userInfoCard.html",
      restrict: "E",
      scope: {
        user: '=person',
        initialCollapsed: '@collapsed'
      },
      controller: function ($scope) {
        $scope.collapsed = ($scope.initialCollapsed === 'true');
        $scope.knightMe = function (user) {
          user.rank = "Knight";
        };
        $scope.collapse = function () {
          $scope.collapsed = !$scope.collapsed;
        };
        $scope.removeFriend = function (friend) {
          var idx = $scope.user.friends.indexOf(friend);
          if (idx > -1) {
            $scope.user.friends.splice(idx, 1);
          }
        };
        $scope.nextState = function () {
          $scope.user.level++;
          $scope.user.level = $scope.user.level % 4;
        };
      }
    };
  });

  app.directive('address', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/address.html',
      scope: {
        address: '='
      },
      controller: function ($scope) {
        $scope.collapsed = false;
        $scope.expandAddress = function () {
          $scope.collapsed = false;
        };
        $scope.collapseAddress = function () {
          $scope.collapsed = true;
        };
      }
    };
  });

  app.directive("removeFriend", function () {
    return {
      templateUrl: 'templates/removeFriend.html',
      restrict: 'E',
      scope: {
        notifyParent: '&removeMethod'
      },
      controller: function ($scope) {
        $scope.removing = false;
        $scope.startRemove = function () {
          $scope.removing = true;
        };
        $scope.cancelRemove = function () {
          $scope.removing = false;
        };
        $scope.confirmRemove = function () {
          $scope.notifyParent();
          //$scope.notifyParent({ friend: 'Chewbacca' }); // This is how we override the parameters
        };
      }
    };
  });

  app.directive('stateDisplay', function () {
    return {
      link: function (scope, el, attrs) {
        var parms = attrs['stateDisplay'].split(" ");
        var linkVar = parms[0];
        var classes = parms.slice(1);
        var all = classes.join(' ');
        scope.$watch(linkVar, function (newVal, oldVal) {
          el.removeClass(all);
          el.addClass(classes[newVal]);
        });
      }
    };
  });

}());