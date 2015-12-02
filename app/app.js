'use strict';

var soundglomerate = angular.module('soundglomerate', [
  'soundglomerate.home',
  'ui.router'
  ]);

soundglomerate
.config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
  .state('app', {
    url: '',
    templateUrl: '<ui-view/>'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'js/home/home.html',
    controller: 'HomeCtrl'
  });

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
  
  $urlRouterProvider.otherwise("/home");
})
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
      
}]);