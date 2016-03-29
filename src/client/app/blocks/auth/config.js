(function() {
    'use strict';

    angular
        .module('blocks.auth')
        .config(config);
        
    config.$inject = ['$httpProvider', 'jwtInterceptorProvider', 'storeProvider'];
    function config($httpProvider, jwtInterceptorProvider, storeProvider) {
        jwtInterceptorProvider.tokenGetter = forTokenGetter;
        $httpProvider.interceptors.push('jwtInterceptor');
        storeProvider.setStore('sessionStorage');
    }
    
    forTokenGetter.$inject = ['auth'];
    function forTokenGetter(auth) {
        return auth.getAuth();
    }
})();