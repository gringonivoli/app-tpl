(function() {
'use strict';

    angular
        .module('blocks.history')
        .factory('historyStorage', historyStorage);

    historyStorage.$inject = ['store'];
    function historyStorage(store) {
        
        var id = 'historyStore';
        
        var service = {            
            set: set,
            get: get,
            remove: remove
        };
        
        init();
        
        return service;

        ////////////////
        
        /**
         * init
         *
         * Inicializa el storage vacio.
         *
         */
        function init(){
            store.set(id, {});
        }

        /**
         * set
         *
         * Setea una nueva propidad
         * al objeto de storage y lo
         * hace persistente.
         *
         * @param name
         * @param val
         * @returns {*}
         */
        function set(name, val){
            var obj = store.get(id);
            obj[name] = val;
            return store.set(id, obj);
        }

        /**
         * get
         *
         * Retorna una propiedad del
         * objeto storage.
         *
         * @param name
         * @returns {*}
         */
        function get(name){
            var obj = store.get(id);
            return obj[name];
        }

        /**
         * remove
         *
         * Elimina una propiedad del
         * objeto storage y lo persiste.
         *
         * @param name
         */
        function remove(name){
            var obj = store.get(id);
            delete obj[name];
            store.set(id, obj);
        }
    }
})();