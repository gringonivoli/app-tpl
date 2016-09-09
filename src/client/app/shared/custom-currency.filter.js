(function () {
    'use strict';
    angular
        .module('app.shared')
        .filter('customCurrency', customCurrency);

    customCurrency.$inject = [];
    function customCurrency() {

        return fu;

        function fu(input) {
            return input ? '$' + input : '';
        }
    }
})();
