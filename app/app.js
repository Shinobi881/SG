'use strict';

var soundglomerate = angular.module('soundglomerate', [
  'soundglomerate.home',
  'ui.router'
  ]);

soundglomerate.config(function($stateProvider){
  $stateProvider
  .state('app', { 
      url: '',
      template: '<ui-view/>'
  })
  .state('app.home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: 'js/home/home.js'
  })
});