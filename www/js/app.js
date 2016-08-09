(function(angular){
  'use strict';

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'ContactCtrl'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
    $urlRouterProvider.otherwise('/app/home');
  }

  angular.module('starter', ['ionic', 'contactModule'])
         .config(config);

})(angular);