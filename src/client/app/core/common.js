(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('common', common);

    common.$inject = ['$location', '$q', '$rootScope', '$timeout', 'logger'];
    function common($location, $q, $rootScope, $timeout, logger) {

        var service = {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            // generic
            isNumber: isNumber,
            logger: logger, // for accessibility
            textContains: textContains
        };

        return service;

        ////////////////

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        function isNumber(val) {
            // negative or positive
            return (/^[-]?\d+$/).test(val);
        }

        function textContains(text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }
    }
})();
