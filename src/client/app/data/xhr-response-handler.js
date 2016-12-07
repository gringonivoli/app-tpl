(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('xhrResponseHandler', xhrResponseHandler);

    xhrResponseHandler.$inject = ['exception'];
    function xhrResponseHandler(exception) {
        var service = {
            error: error,
            returnData: returnData
        };

        return service;

        ////////////////
        function error(defaultMsg) {
            return function (response) {
                var msg = response.data || defaultMsg || 'Error XHR.';
                return exception.catcher(msg)(response);
            };
        }

        function returnData(response) {
            return response.data;
        }
    }
})();
