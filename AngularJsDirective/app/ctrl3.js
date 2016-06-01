(function () {
	var app =  angular.module('app');

	app.controller('ctrl3.5', function ($scope) {
		$scope.data = { message: 'I have not been clicked' };
		$scope.clickHandler = function (p) {
			p.message = "I have been clicked";
		};
	});

	app.directive('myClick', function ($parse) {
		return {
			restrict: 'A',
			link: function (scope, el, attrs) {
				var fn = $parse(attrs['myClick']);
				el.on('click', function (event) {
					scope.$apply(function () {
						fn(scope)
					});
				});
			}
		};
	});
}());