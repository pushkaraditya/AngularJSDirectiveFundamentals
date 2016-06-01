(function () {
  var videoCtrl = function ($scope) {
    $scope.title = "Video Spacebar directive demo";
  };

  var app = angular.module('app')
    .controller('videoCtrl', videoCtrl);

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