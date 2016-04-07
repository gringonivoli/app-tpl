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
        appTitle: 'App',
        appStateNoAuth: 'login',
        appNoAuthMsg: 'Ups! Parece que no puedes acceder a esta ruta.',
        appNoAuthTitle: 'Ruta inaccesible'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', 'authProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, authProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        configureExceptionHandler();
        configureAuth();
        configureRouterHelper();

        ///////////////////

        function configureExceptionHandler() {
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }

        function configureAuth() {
            authProvider.configure({
                stateToRedirect: config.appStateNoAuth,
                warningMsg: config.appNoAuthMsg,
                warningTitle: config.appNoAuthTitle
            });
        }

        function configureRouterHelper() {
            var resolveAlways = {
                ready: ready
            };

            ready.$inject = ['datacontext'];
            /* @ngInject */
            function ready(datacontext) {
                return datacontext.ready();
            }

            routerHelperProvider.configure({
                docTitle: config.appTitle + ': ',
                resolveAlways: resolveAlways
            });
        }
    }

})();
