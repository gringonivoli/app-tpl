(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('repository.user', RepositoryUser);

    RepositoryUser.$inject = ['$http', 'store', 'logger', 'config', 'exception', '$q'];
    function RepositoryUser($http, store, logger, config, exception, $q) {
        var service = {
            create: createRepo
        };

        return service;

        ////////////////
        function createRepo() {

            var repo = {
                setLogged: setUserLogged,
                getUserLogged: getUserStore,
                rmUserLogged: destroyUserLogged,
                updateMe: updateMe
            };

            return repo;

            function updateMe(usuario) {
                return $http({
                    method: 'PUT',
                    url: 'api/user',
                    data: usuario
                })
                    .then(putComplete)
                    .catch(function(response) {
                        return exception.catcher('Error XHR al actualizar sus datos.')(response);
                    });

                function putComplete(response) {
                    return response.data;
                }
            }

            function destroyUserLogged() {
                return store.set(config.userLoggedStore, {});
            }

            function getUserStore() {
                return store.get(config.userLoggedStore) || setUserLogged();
            }

            function setUserLogged() {
                return getUserLogged()
                    .then(success);

                function success(data) {
                    return $q
                        .when(store.set(config.userLoggedStore, data))
                        .then(function (data) {
                            return data;
                        });
                }
            }

            function getUserLogged() {
                return $http({
                    method: 'GET',
                    url: 'api/user/logged'
                })
                .then(getUserLoggedComplete)
                .catch(fail);

                function getUserLoggedComplete(response) {
                    return response.data;
                }

                function fail(response) {
                    return exception.catcher('XHR Fail for getUserLogged')(response);
                }
            }
        }
    }
})();
