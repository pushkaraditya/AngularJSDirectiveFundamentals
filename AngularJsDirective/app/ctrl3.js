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


	app.controller('ctrl3.6', function ($scope) {
		$scope.user1 = { name: 'Luke', selected: true };
	});

	app.directive('userTile', function () {
		return {
			restrict: 'E',
			templateUrl: 'templates/userTile.html',
			scope: {
				user: '='
			}
		};
	});

	app.directive('userClickSelect', function () {
		return {
			link: function (scope, el, attrs) {
				el.on('click', function () {
					scope.user.selected = !scope.user.selected;
					scope.$apply();
				});
			}
		};
	});

	app.controller("ctrl3.7", function ($scope) {
		$scope.size = 150;
	});

	app.directive("fontScale", function () {
		return {
			link: function (scope, el, attrs) {
				scope.$watch(attrs['fontScale'], function (newVal, oldVal) {
					el.css('font-size', newVal + '%');
				});
			}
		};
	});
}());