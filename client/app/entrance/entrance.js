'use strict';

angular.module('entranceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('entrance', {
        url: '/entrance',
        templateUrl: 'app/entrance/entrance.html',
        controller: 'EntranceCtrl'
      });
  });