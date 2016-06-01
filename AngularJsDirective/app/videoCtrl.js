(function () {
  var videoCtrl = function ($scope) {
    $scope.message = "Message from controller";
  };
  var app = angular.module('app');
  app.controller('videoCtrl', videoCtrl);
}());