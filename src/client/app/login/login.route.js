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
                    template: '<login></login>',
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
