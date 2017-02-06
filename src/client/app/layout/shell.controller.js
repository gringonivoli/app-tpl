(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$scope', 'config', 'datacontext'];
    function ShellController($scope, config, datacontext) {

        var vm = this;
        vm.user = {};
        vm.navline = {
            title: config.appTitle
        };
        vm.prefix = config.appTitle + ':';

        activate();

        ////////////////

        function activate() {
            setUser();
        }

        function setUser() {
            vm.user = datacontext.user.getUserLogged();
            $scope.$on('userLogged', function (event, user) {
                vm.user = user;
            });
        }
    }
})();
