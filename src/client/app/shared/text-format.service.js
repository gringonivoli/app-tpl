(function () {
    'use strict';

    angular
        .module('app.shared')
        .factory('textFormatService', textFormatService);

    textFormatService.$inject = [];
    function textFormatService() {
        var service = {
            periodoToString: periodoToString
        };

        return service;

        ////////////////
        function periodoToString(desde, hasta) {
            var strDesde = (angular.isObject(desde) &&
            (typeof desde.toLocaleDateString === 'function')) ?
                desde.toLocaleDateString('es-AR') : null;
            var strHasta = (angular.isObject(hasta) &&
            (typeof hasta.toLocaleDateString === 'function')) ?
                hasta.toLocaleDateString('es-AR') : null;
            var text = 'Período', textDesde = '', textHasta = '', sep = '';
            if (strDesde) {
                textDesde = ' desde: ' + strDesde;
            }
            if (strHasta) {
                textHasta += ' hasta: ' + strHasta;
            }
            if (strDesde && strHasta) {
                sep = ' -';
            }
            if (!strDesde && !strHasta) {
                text = '';
            }
            return text + textDesde + sep + textHasta;
        }
    }
})();
