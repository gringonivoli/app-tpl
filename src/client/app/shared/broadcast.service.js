(function () {
    'use strict';

    angular
        .module('app.shared')
        .factory('broadcast', broadcast);

    broadcast.$inject = ['common', 'datacontext'];
    function broadcast(common, datacontext) {
        var service = {
            userLogged: broadcastUserLogged,
            productSelected: broadcastProductSelected
        };

        return service;

        ////////////////

        function broadcastUserLogged() {
            return common.$broadcast('userLogged', datacontext.user.getUserLogged());
        }

        function broadcastProductSelected() {
            return common.$broadcast('productSelected');
        }
    }
})();
