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

  app.factory("userListState", function () {
    return {
      selectedUser: null,

    };
  });

  app.directive("masterUsers", function (userListState) {
    return {
      scope: {
        users: '=data'
      },
      templateUrl: 'templates/masterUsers.html',
      controller: function ($scope) {
        $scope.state = userListState;
        userListState.selectedUser = $scope.users[0];
      }
    };
  });

  app.directive("detailUsers", function (userListState) {
    return {
      scope: {
        users: '=data'
      },
      templateUrl: 'templates/detailUsers.html',
      controller: function ($scope) {
        $scope.state = userListState;
      }
    };
  });


  app.controller("ctrl7.5", function ($scope, $location) {
    var number = $location.path().split('.')[1] - 0;
    $scope.chapter = {
      unit: unit,
      number: number,
      name: chapters[number - 1]
    };

    $scope.openModal = function () {
      $scope.modalOpen = true;
    }

    $scope.closeModal = function (response) {
      $scope.modalOpen = false;
      console.log('modal closed', response);
    };

    $scope.modalClosed = function (response) {
      $scope.closeModal('no');
    }
  });

  app.controller("modalCtrl", function ($scope) {
    $scope.close = function (response) {
      $scope.closeModal(response);
    }
  })

  app.directive('modal', function ($document) {
    return {
      scope: {
        modalOpen: '=open',
        options: '=',
        onClose: '&'
      },
      transclude: true,
      templateUrl: 'templates/modalTemplate.html',
      controller: function ($scope) {
        $scope.close = function () {
          $scope.modalOpen = false;
          $scope.onClose();
        };
      },
      link: function ($scope, el, attrs) {
        var options = angular.extend({
          height: '250px',
          width: '500px',
          top: '20%',
          left: '30%'
        }, $scope.options);
        el.find('.modal-container').css({
          'left': options.left,
          'top': options.top,
          'height': options.height + 'px',
          'width': options.width + 'px'
        });

        var pageHeight = $document.height();
        var pageWidth = $document.width();
        el.find('.modal-blackout').css({
          'width': pageWidth + 'px', 'height': pageHeight + 'px'
        });
      }
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