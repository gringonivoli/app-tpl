(function() {
'use strict';

    angular
        .module('blocks.history')
        .factory('history', history);

    history.$inject = ['store', 'historyStorage', '$rootScope'];
    function history(store, historyStorage, $rootScope) {
        
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
         * @param parentPath
         */
        function addToHistory(parentPath){
            var history = null;
            if(save){
                if(parentPath.$$route.keys.length){
                    parentPath = setRouteParams(parentPath);
                }else{
                    parentPath = parentPath.$$route.originalPath;
                }
                history = store.get(id);
                history.push(parentPath);
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
        function hasHistoryBroken(){
            if(!back && !save && store.get(id).length !== 0){
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
        function cleanUp(){
            init();
            modalStorageService.init();
        }

        /**
         * savePath
         *
         * Le comunica a addToHistory, de
         * manera implicita, que guarde el
         * path en el historial.
         *
         * @param b
         */
        function savePath(b){
            save = b;
        }

        /**
         * init
         *
         * Inicializa el historial.
         */
        function init(){
            setStore();
            handleHistory();
        }
        
        function setStore() {
            store.set(id, []);
        }
        
        function handleHistory(){
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                addToHistory((fromState) ? fromState : false);
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
        function getLast(){
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
        function hasHistory(){
            return (store.get(id).length !== 0);
        }

        /**
         * setRouteParams
         *
         * En caso de que la ruta tenga parámetros
         * se crea la misma con los valores de
         * los parámetros y se retorna.
         *
         * @param route
         * @returns {string}
         */
        function setRouteParams(route){
            var l = route.$$route.keys.length;
            var regex = new RegExp(route.$$route.regexp);
            var path = route.$$route.originalPath + '';
            var resultRegex = regex.exec(path);
            for(var i = 1; i <= l; i++){
                var aux = resultRegex[i] + '';
                var param = route.pathParams[aux.replace(':', '')];
                path = path.replace(aux, param);
            }
            return path;
        }
    }
})();