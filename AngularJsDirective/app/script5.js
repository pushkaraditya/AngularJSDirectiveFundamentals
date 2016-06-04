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


  app.controller("ctrl5.3", function ($scope) {
    var number = 3;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.items = [2,5,23,253];
  });

  app.directive("myLazyRender", function () {
    return {
      restrict: "A",
      transclude: "element",
      priority: 1200,
      link: function (scope, el, attrs, ctrl, transclude) {
        var hasBeenShown = false;
        var unwatchFn = scope.$watch(attrs.myLazyRender, function (value) {
          if (value && !hasBeenShown) {
            hasBeenShown = true;
            transclude(scope, function (clone) {
              el.after(clone);
            });
            unwatchFn();
          }
        });
      }
    };
  });

  app.directive("echo", function () {
    return {
      restrict: "A",
      priority: 900,
      link: function (scope, el, attrs, ctrl, transclude) {
        console.log('echo!');
      }
    };
  });


  app.controller("ctrl5.4", function ($scope) {
    var number = 4;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.bountyHunters = [
      { name: 'Boba Fett' },
      { name: 'IG-88' },
      { name: 'Dengar' },
      { name: 'Bossk' },
      { name: 'Cad Bane' }
    ];

    $scope.add = function () {
      $scope.bountyHunters.push({ name: '4LOM' });
    };

    $scope.remove = function () {
      $scope.bountyHunters.length--;
    }
  });

  app.directive('myRepeat', function () {
    return {
      restrict: "A",
      transclude: 'element',
      link: function (scope, el, attrs, ctrl, transclude) {
        var pieces = attrs.myRepeat.split(' ');
        var itemString = pieces[0];
        var collectionName = pieces[2];
        var elements = [];

        scope.$watchCollection(collectionName, function (collection) {
          if (elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
              elements[i].scope.$destroy();
              elements[i].el.remove();
            }
            elements = [];
          }

          for (var i = 0; i < collection.length; i++) {
            var childScope = scope.$new();
            childScope[itemString] = collection[i];
            transclude(childScope, function (clone) {
              el.before(clone);
              var item = {};
              item.el = clone;
              item.scope = childScope;
              elements.push(item);
            });
          }
        });
      }
    }
  });

  app.controller("ctrl5.5", function ($scope) {
    var number = 5;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.bountyHunters = [
      { name: 'Boba Fett', age: 45 },
      { name: 'IG-88', age: 25 },
      { name: 'Dengar', age: 54 },
      { name: 'Bossk', age: 89 },
      { name: 'Cad Bane', age: 745/4 }
    ];

    $scope.add = function () {
      $scope.bountyHunters.push({ name: '4LOM' });
    };

    $scope.remove = function () {
      $scope.bountyHunters.length--;
    }
  });

  app.directive('userList', function ($compile) {
    return {
      restrict: "A",
      transclude: 'element',
      link: function (scope, el, attrs, ctrl, transclude) {
        var pieces = attrs.userList.split(' ');
        var itemString = pieces[0];
        var collectionName = pieces[2];
        var elements = [];

        scope.$watchCollection(collectionName, function (collection) {
          if (elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
              elements[i].scope.$destroy();
              elements[i].el.remove();
            }
            elements = [];
          }

          for (var i = 0; i < collection.length; i++) {
            var childScope = scope.$new();
            childScope[itemString] = collection[i];
            transclude(childScope, function (clone) {
              var template = $compile('<div class="panel panel-primary"><div class="panel-heading">{{' + itemString + '.name}}</div><div class="panel-body"></div></div>');
              var wrapper = template(childScope);
              wrapper.find(".panel-body").append(clone);

              el.before(wrapper);
              var item = {};
              item.el = wrapper;
              item.scope = childScope;
              elements.push(item);
            });
          }
        });
      }
    }
  });
}());