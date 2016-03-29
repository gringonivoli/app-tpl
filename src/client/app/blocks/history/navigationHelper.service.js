(function() {
'use strict';

    angular
        .module('blocks.history')
        .factory('navigationHelper', navigationHelper);

    navigationHelper.$inject = ['$location', 'history'];
    function navigationHelper($location, history) {
        var service = {
            openChild: openChild,
            hasBack: hasBack,
            isModal: isModal,
            back: back
        };
        
        return service;

        ////////////////
        
        /**
         * openChild
         *
         * Navega hacia una pantalla pero
         * tomandola como pantalla hija de
         * su predecesora, estilo modal.
         *
         * @param path {string}
         */
        function openChild(path){
            history.savePath(true);
            $location.url(path);
        }

        /**
         * hasBack
         *
         * Comprueba si hay elementos en
         * el historial para navegar hacia
         * ellos, si esos elementos no existen
         * ejecuta la funcion que se le pasa
         * por parametro
         *
         * @param func {function}
         */
        function hasBack(func){
            history.hasHistory() ? $location.url(history.getLast()) : func();
        }

        /**
         * back
         *
         * Si hay elementos en el historial
         * para navegar lo hace, si no se
         * queda en el molde.
         *
         * regre
         */
        function back(){
            if(history.hasHistory()){
                $location.url(history.getLast());
            }
        }

        /**
         * isModal
         *
         * Mediante la comprobacion
         * de si existe un historial retorna
         * true o false si es modal o no.
         *
         * @returns {boolean}
         */
        function isModal(){
            return history.hasHistory();
        }
    }
})();