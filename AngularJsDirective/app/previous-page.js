(function () {
  angular.module("app").directive("previousPage", function ($window) {
    return {
      link: function (scope, el, attrs) {
        el.on("click", function () {
          $window.history.back();
        });
      }
    };
  });
}());