(function(angular){
    'use strict';

    angular.module('pe.talent').config(
        function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('talent',{
                url : '/',
                views : {
                    'header' : {
                        templateUrl : 'components/header/header.tpl.html',
                        controller : 'HeaderController',
                        controllerAs : 'Header'
                    }
                }
            })
            .state('talent.users', {
                url :  'users',
                views : {
                    'body@' :{
                        templateUrl : 'compositions/talent-search.tpl.html',
                        controller : 'UserGridController',
                        controllerAs : 'UserGrid'
                    }
                }
            });
    });

})(angular);