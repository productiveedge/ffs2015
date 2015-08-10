(function(angular){
    'use strict';


    angular.module('pe.talent').service('UserService',
    function($q, $http){

        var users = [];

        return {
            browseUsers : browseUsers,
            readUser : readUser,
            editUser : editUser,
            addUser : addUser,
            deleteUser : deleteUser
        };

        function browseUsers(){
            var defer = $q.defer();
            $http({
                method : 'GET',
                url : 'api/users'
            }).then(function(res){
                defer.resolve(res.data);
            }, function(err){
                defer.reject(err.data);
            });

            return defer.promise;
        }

        function readUser(){

        }

        function editUser(){

        }

        function addUser( userData ){
            var defer = $q.defer();
            if(users.length > 0){
                defer.resolve(users);
            }else {
                $http({
                    method: 'POST',
                    url: 'api/user',
                    data: userData
                }).then(function (res) {
                    users = res.data;
                    defer.resolve(res.data);
                }, function (res) {
                    defer.reject(res.data);
                });
            }
            return defer.promise;
        }

        function deleteUser(){

        }

    });
})(angular);