(function () {
    'use strict';

    angular
        .module('app.login')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    url: '/',
                    templateUrl: 'src/client/app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    title: 'Login',
                    resolve: {
                        /* @ngInject */
                        rm: function (auth, datacontext) {
                            auth.logout();
                            return datacontext.user.rmUserLogged();
                        }
                    }
                }
            }
        ];
    }
})();
