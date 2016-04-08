(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['historyStorage', 'navigationHelper'];
    function LoginController(historyStorage, navigationHelper) {

        var vm = this;
        vm.isModal = navigationHelper.isModal();
        vm.cancel = navigationHelper.back;

        vm.openChild = function(name, params) {
            historyStorage.set('login', 'asdf');
            navigationHelper.openChild(name, params);
        };

        activate();

        ////////////////

        function activate() { }
    }
})();
