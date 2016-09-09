(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[App Error] ',
        appTitle: 'App-Tpl',
        appStateNoAuth: 'login',
        appNoAuthMsg: 'Ups! Parece que no puedes acceder a esta ruta.',
        appNoAuthTitle: 'Ruta inaccesible',
        appLandingState: 'dashboard',
        errorAuthMsg: 'Ups! Usuario y/o Password inválidos.',
        userLoggedStore: 'userLoggedStore',
        expiredMsg: 'Porfavor inicie sesión nuevamente.',
        expiredTitle: 'Sesión caducada'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider',
        'exceptionHandlerProvider', 'authProvider', '$httpProvider',
        'jwtInterceptorProvider', 'storeProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider,
        authProvider, $httpProvider, jwtInterceptorProvider, storeProvider) {

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        configureExceptionHandler();
        configureStore();
        configureAuth();
        configureRouterHelper();

        ///////////////////

        function configureExceptionHandler() {
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }

        function configureStore() {
            storeProvider.setStore('sessionStorage');
        }

        function configureAuth() {
            jwtInterceptorProvider.tokenGetter = forTokenGetter;
            $httpProvider.interceptors.push('jwtInterceptor');

            forTokenGetter.$inject = ['auth'];
            /* @ngInject */
            function forTokenGetter(auth) {
                return auth.getAuth();
            }

            authProvider.configure({
                stateToRedirect: config.appStateNoAuth,
                stateAuth: config.appLandingState,
                warningMsg: config.appNoAuthMsg,
                warningTitle: config.appNoAuthTitle,
                errorAuthMsg: config.errorAuthMsg,
                expiredMsg: config.expiredMsg,
                expiredTitle: config.expiredTitle
            });
        }

        function configureRouterHelper() {
            var resolveAlways = {
                ready: ready
            };

            ready.$inject = ['$rootScope', 'common', 'datacontext'];
            /* @ngInject */
            function ready($rootScope, common, datacontext) {
                // For prime promise.
                //return datacontext.ready();
            }

            routerHelperProvider.configure({
                docTitle: config.appTitle + ': ',
                resolveAlways: resolveAlways
            });
        }
    }
})();
