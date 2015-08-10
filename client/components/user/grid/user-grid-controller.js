(function(angular){
    'use strict';
    angular.module('pe.talent').controller('UserGridController', function(UserService){

        this.addUser = addUser;
        this.browseUsers = browseUsers;
        this.userCollection = [];

        function addUser(userData){
            UserService.addUser(userData).then(function(data){
                this.browseUsers();
            }, function(err){
                console.warn(err);
            });
        }

        function browseUsers() {
            UserService.browseUsers().then(angular.bind(this,function(data){
                    this.userCollection = data;
            }), function (err) {
                console.warn(err);
            });
        }

    });

})(angular);