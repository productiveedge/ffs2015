(function(angular){
    'use strict';

    angular.module('pe.talent').directive('userGrid' , function(){

        return {
            templateUrl : 'components/user/grid/user-grid.tpl.html',
            controller : 'UserGridController',
            controllerAs : 'Users',
            link : function(scope, elem, attr){
                scope.UserGrid.browseUsers();
            }
        };

    });

})(angular);