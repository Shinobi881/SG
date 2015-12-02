'use strict';

var soundglomerate = angular.module('soundglomerate', [
  'soundglomerate.home',
  'ui.router'
  ]);

soundglomerate
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state('app', {
    url: '',
    template: '<ui-view/>'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'js/home/home.html',
    controller: 'HomeCtrl'
  })

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
})
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
      
}]);