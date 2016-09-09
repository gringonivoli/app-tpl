(function() {
    'use strict';

    angular.module('app.core', [
        'ngAnimate', 'ngSanitize', 'ngMessages', 'ngResource', 'ngCookies',

        'blocks.exception', 'blocks.logger', 'blocks.router',
        'blocks.auth',
        'blocks.history',

        'ui.router', 'ui.mask',
        'angular-storage',
        'angular-jwt', 'angular-loading-bar', 'ui.select',
        'ui.bootstrap', 'angularUtils.directives.dirPagination',
        'angular-clipboard'
    ]);
})();
