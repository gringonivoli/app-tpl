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
        appUrlNoAuth: 'login',
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
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
        authProvider.configure({
            urlToRedirect: config.appUrlNoAuth,
            warningMsg: config.appNoAuthMsg,
            warningTitle: config.appNoAuthTitle
        });
    }

})();
