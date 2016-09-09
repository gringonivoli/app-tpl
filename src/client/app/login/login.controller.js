(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['auth', 'validateService', 'datacontext', 'broadcast'];
    function LoginController(auth, validateService, datacontext, broadcast) {

        var vm = this;
        vm.validate = validateService;
        vm.auth = authenticate;

        activate();

        ////////////////

        function activate() {
        }

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
