(function() {
'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.login')
        .component('login', {
            templateUrl: 'src/client/app/login/login.component.html',
            controller: LoginController,
            controllerAs: 'vm',
            bindings: {}
        });

    LoginController.$inject = ['auth', 'validateService', 'datacontext', 'broadcast'];
    function LoginController(auth, validateService, datacontext, broadcast) {

        var vm = this;

        vm.validate = validateService;
        vm.auth = authenticate;

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };

        function authenticate() {
            if (vm.validate.form(vm.loginForm)) {
                var data = {
                    username: vm.user.username,
                    pass: vm.user.pass,
                };
                auth
                    .auth(data)
                    .then(setUserLogged);
            }

            function setUserLogged() {
                datacontext.user.setLogged()
                    .then(success);

                function success() {
                    var user = datacontext.user.getUserLogged();
                    broadcast.userLogged();
                    return user;
                }
            }
        }
    }
})();