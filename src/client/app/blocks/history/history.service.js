(function () {
    'use strict';

    angular
        .module('blocks.history')
        .factory('history', history);

    history.$inject = ['store', 'historyStorage', '$rootScope', '$state'];
    function history(store, historyStorage, $rootScope, $state) {

        var id = 'history';
        var save = false;
        var back = false;

        var service = {
            addToHistory: addToHistory,
            getLast: getLast,
            savePath: savePath,
            hasHistory: hasHistory
        };

        init();

        return service;

        ////////////////

        /**
         * addToHistory
         *
         * Si asi se requirio, mediante
         * el seteo en true de la variable
         * save, se guarda el path de la pantalla
         * desde donde inicio la nueva navegación.
         *
         * @param {Object} fullState
         */
        function addToHistory(fullState) {
            var history = null;
            if (save) {
                var parentPath = $state.href(fullState.name, fullState.params);
                history = store.get(id);
                history.push(fullState);
                store.set(id, history);
            }
            hasHistoryBroken();
            save = false;
            back = false;
        }

        /**
         * hasHistoryBroken
         *
         * Determina si se rompio el flujo de
         * navegacion que venia siendo
         * guardado en el historial.
         */
        function hasHistoryBroken() {
            if (!back && !save && store.get(id).length !== 0) {
                cleanUp();
            }
        }

        /**
         * cleanUp
         *
         * Elimina el contenido del historial y
         * los datos de formularios almacenados.
         *
         */
        function cleanUp() {
            setStore();
            historyStorage.init();
        }

        /**
         * savePath
         *
         * Le comunica a addToHistory, de
         * manera implicita, que guarde el
         * path en el historial.
         *
         * @param {boolean} b
         */
        function savePath(b) {
            save = b;
        }

        /**
         * init
         *
         * Inicializa el historial.
         */
        function init() {
            setStore();
            handleHistory();
        }

        function setStore() {
            store.set(id, []);
        }

        function handleHistory() {
            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    if (fromState) {
                        var fullState = {
                            name: fromState.name,
                            params: fromParams
                        };
                        addToHistory(fullState);
                    }
                });
        }

        /**
         * getLast
         *
         * Retorna el último elemento
         * agregado al historial y
         * actualiza el mismo.
         *
         * @returns {T}
         */
        function getLast() {
            back = true;
            var history = store.get(id);
            var last = history.pop();
            store.set(id, history);
            return last;
        }

        /**
         * hasHistory
         *
         * Retorna true o false
         * dependiendo de si el historial
         * tiene o no elementos.
         *
         * @returns {boolean}
         */
        function hasHistory() {
            return (store.get(id).length !== 0);
        }
    }
})();
