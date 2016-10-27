(function() {
    'use strict';

    angular
        .module('blocks.auth')
        .provider('auth', authProvider);

    authProvider.$inject = [];
    function authProvider() {
        /* jshint validthis:true */
        var config = {
            stateToRedirect: '',
            stateAuth: '',
            warningMsg: '',
            warningTitle: '',
            expiredMsg: '',
            expiredTitle: '',
            urlAuth: 'api/auth',
            errorAuthMsg: ''
        };

        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = Auth;

        Auth.$inject = ['$http', 'store', '$rootScope', '$state', 'logger', 'jwtHelper'];
        /**
         * @param  {ng.IHttpService} $http
         * @param  {any} store
         * @param  {ng.IRootScopeService} $rootScope
         * @param  {ng.ui.IStateService} $state
         * @param  {any} logger
         */
        function Auth($http, store, $rootScope, $state, logger, jwtHelper) {

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
             * Trata de obtener un token de
             * acceso por medio de la auth
             * de username y pass.
             *
             * @param {Object} data
             */
            function auth(data) {
                return $http({
                    method: 'POST',
                    url: config.urlAuth,
                    skipAuthorization: true,
                    data: data//{username: user, pass: pass}
                })
                .then(successAuth)
                .catch(failAuth);

                function successAuth(result) {
                    setAuth(result.data.jwt);
                    return $state.go(config.stateAuth);
                }

                function failAuth(result) {
                    return logger.error(config.errorAuthMsg, result.data, 'Auth Error');
                }
            }

            /**
             * logout
             *
             * Borra el token de acceso.
             */
            function logout() {
                return store.remove('token');
            }

            /**
             * setAuth
             *
             * Almacena el token de acceso.
             *
             * @param {string} token
             */
            function setAuth(token) {
                store.set('token', token);
            }

            /**
             * getAuth
             *
             * Retorna el token de acceso.
             *
             * @returns {*}
             */
            function getAuth() {
                return store.get('token');
            }

            function init() {
                isAuthForRoute();
                isTokenExpired();
            }

            function isAuthForRoute() {
                $rootScope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams) {
                        if (toState.access && toState.access.requiredLogin && !getAuth()) {
                            event.preventDefault();
                            logger.warning(config.warningMsg, null, config.warningTitle);
                            $state.go(config.stateToRedirect);
                        }
                    }
                );
            }

            function isTokenExpired() {
                $rootScope.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        var token = getAuth();
                        if (token) {
                            if (jwtHelper.isTokenExpired(token)) {
                                event.preventDefault();
                                logger.error(config.expiredMsg, null,
                                config.expiredTitle);
                                $state.go(config.stateToRedirect);
                            }
                        }
                    }
                );
            }
        }
    }
})();
