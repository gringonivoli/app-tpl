(function () {
    'use strict';

    angular
        .module('blocks.history')
        .factory('historyStorage', historyStorage);

    historyStorage.$inject = ['store', '$window', '$timeout'];
    function historyStorage(store, $window, $timeout) {

        var id = 'historyStore';

        var service = {
            set: set,
            get: get,
            remove: remove,
            init: init
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
        function init() {
            store.set(id, {});
        }

        /**
         * set
         *
         * Setea una nueva propidad
         * al objeto de storage y lo
         * hace persistente.
         *
         * @param {String} name
         * @param {Object} val
         * @returns {*}
         */
        function set(name, val) {
            val.scrollY = $window.pageYOffset;
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
         * @param {String} name
         * @returns {*}
         */
        function get(name) {
            var obj = store.get(id);
            obj = obj[name];
            if (obj && obj.hasOwnProperty('scrollY')) {
                $timeout(function () {
                    $window.scrollTo(0, obj.scrollY);
                }, 300);
            }
            return obj;
        }

        /**
         * remove
         *
         * Elimina una propiedad del
         * objeto storage y lo persiste.
         *
         * @param {String} name
         */
        function remove(name) {
            var obj = store.get(id);
            delete obj[name];
            store.set(id, obj);
        }
    }
})();
