(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daPrintButton', daPrintButton);

    daPrintButton.$inject = [];
    function daPrintButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: PrintButtonController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                print: '&'
            },
            templateUrl: 'src/client/app/widgets/buttons/da-print-button.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function PrintButtonController () {

    }
})();
