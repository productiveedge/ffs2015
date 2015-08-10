(function(angular){

    angular.module('pe.talent').directive('userCard', function(){
        return {
            scope : {
                'userCard' : '='
            },
            controller : function(){

            },

            link : function(scope, elem, attr){
                angular.extend(scope.User, scope.userCard);
            },

            controllerAs : 'User',
            templateUrl : 'components/user/card/user-card.tpl.html'
        };
    });

})(angular);