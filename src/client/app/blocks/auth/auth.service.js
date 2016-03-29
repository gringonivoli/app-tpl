(function() {
'use strict';

    angular
        .module('blocks.auth')
        .factory('auth', auth);

    auth.$inject = ['$http', 'store', '$rootScope', '$location', 'logger'];
    function auth($http, store, $rootScope, $location, logger) {
        
        var service = {
            auth: auth,
            logout: logout,
            setAuth: setAuth,
            getAuth: getAuth,
            isAuthForRoute: isAuthForRoute
        };
        
        init();
        
        return service;

        ////////////////
        
        /**
         * auth
         *
         * Trata de obtener un toke de
         * acceso por medio de la auth
         * de username y pass.
         *
         * @param data
         * @param successCallback
         * @param errorCallback
         */
        function auth(data, successCallback, errorCallback){
            $http({
                method: 'POST',
                url: 'api/auth',
                skipAuthorization: true,
                data: data//{username: user, pass: pass}
            }).then(function(response){
                successCallback(response);
            }, function (response) {
                errorCallback(response);
            });
        }

        /**
         * logout
         *
         * Borra el token de acceso.
         */
        function logout(){
            store.remove('token');
            store.remove('userLogged');
        }

        /**
         * setAuth
         *
         * Almacena el token de acceso.
         *
         * @param token
         */
        function setAuth(token){
            store.set('token', token);
        }

        /**
         * getAuth
         *
         * Retorna el token de acceso.
         *
         * @returns {*}
         */
        function getAuth(){
            return store.get('token');
        }

        function init(){
            isAuthForRoute();
        }

        function isAuthForRoute(){
            $rootScope.$on('$stateChangeStart', 
                function (event, toState, toParams, fromState, fromParams) {
                    if(toState.access && toState.access.requiredLogin && !getAuth()){
                        logger.warning('Ups! Parece que no puedes acceder a esta ruta.', 'Ruta inaccesible');
                        $location.path('/');
                    }
                }
            );            
        }                
    }
})();