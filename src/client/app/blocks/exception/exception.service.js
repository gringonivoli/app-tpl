(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    exception.$inject = ['$q', 'logger'];
    function exception($q, logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(e) {
                logger.error(message, e);
                return $q.reject();
            };
        }
    }
})();
