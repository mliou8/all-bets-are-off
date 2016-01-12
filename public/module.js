var app = angular.module('bets', ['ui.router']);

app.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});