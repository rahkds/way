angular.module('Home', []);

var app = angular.module('way', [
	//'filters',
	//'directive',
	'Home',
	'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false,
	});

	$routeProvider.when('/', {
		controller: 'homeCtrl',
		templateUrl: 'modules/home/views/home.html',
	}).otherwise({
		redirect: '/'
	});
}]);


app.run(['$rootScope', function($rootScope) {
	$rootScope.base_url = 'http://localhost:8081/way/admin/';
}]);