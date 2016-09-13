(function () {
    'use strict';

    angular
        .module('app.decorators')
        .directive('autofocus', autofocus);

    autofocus.$inject = ['$timeout'];
    function autofocus($timeout) {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            if (attrs.autofocus !== false) {
                $timeout(
                    function () {
                        element[0].focus();
                    }, 100
                );
            }
        }
    }
})();
