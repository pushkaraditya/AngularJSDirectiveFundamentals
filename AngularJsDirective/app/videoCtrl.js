(function () {
  var videoCtrl = function ($scope) {
    $scope.title = "Video Spacebar directive demo";
    $scope.messages = [];
    $scope.handlePause = function () {
      $scope.messages.push({ text: 'paused!' });
      console.log('paused!');
    };
  };

  var app = angular.module('app')
    .controller('videoCtrl', videoCtrl);

  app.directive('eventPause', function () {
    return {
      restrict: 'A',
      scope: {
        eventPause: '&'
      },
      link: function (scope, el, attrs) {
        el.on('pause', function (event) {
          //scope.eventPause();
          scope.$apply(function () {
            scope.eventPause();
          });
        });
      }
    };
  });

  app.directive('spacebarSupport', function () {
    return {
      restrict: 'A',
      link: function (scope, el, attrs) {
        var vidEl = el[0];
        $('body').on('keypress', function (evt) {
          if (evt.keyCode === 32)
            if (vidEl.paused)
              vidEl.play();
            else
              vidEl.pause();
        });
      }
    };
  });
}());