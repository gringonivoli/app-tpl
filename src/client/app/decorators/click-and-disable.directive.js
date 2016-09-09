(function() {
    'use strict';

    angular
        .module('app.decorators')
        .directive('clickAndDisable', clickAndDisable);

    clickAndDisable.$inject = [];
    function clickAndDisable() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                clickAndDisable: '&'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('click', function() {
                var prom = scope.clickAndDisable();
                if (prom) {
                    element.prop('disabled',true);
                    prom.finally(function() {
                        element.prop('disabled',false);
                    });
                }
            });
        }
    }
})();
