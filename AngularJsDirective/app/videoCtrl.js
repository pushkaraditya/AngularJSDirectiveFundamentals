(function () {
  var videoCtrl = function ($scope) {
    $scope.title = "Video Spacebar directive demo";
    $scope.messages = [];
    $scope.handlePause = function (e) {
      console.log(e);
      $scope.messages.push({ text: 'paused!' });
      console.log('paused!');
    };
  };

  var app = angular.module('app')
    .controller('videoCtrl', videoCtrl);

  app.directive('eventPause', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, el, attrs) {
        var fn = $parse(attrs['eventPause']);
        el.on('pause', function (event) {
          //scope.eventPause();
          scope.$apply(function () {
            //scope.eventPause();
            fn(scope, { evt: event });
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