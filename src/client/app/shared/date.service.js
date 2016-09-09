(function () {
    'use strict';

    angular
        .module('app.shared')
        .factory('dateService', dateService);

    dateService.$inject = ['moment'];
    function dateService(moment) {
        var service = {
            fix: fix
        };

        return service;

        ////////////////
        function fix(date) {
            if (!angular.isDate(date) && date) {
                date = new Date(date);
            }
            return moment(date)
                .tz('America/Argentina/Cordoba')
                .format();
        }
    }
})();
