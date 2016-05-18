'use strict';

/**
 * @ngdoc overview
 * @name infoshareWotkshopApp
 * @description
 * # infoshareWotkshopApp
 *
 * Main module of the application.
 */
Stamplay.init('infosharewotkshopapp');

angular
  .module('infoshareWotkshopApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStamplay'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
