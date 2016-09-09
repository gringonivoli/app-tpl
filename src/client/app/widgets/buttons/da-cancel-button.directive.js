(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daCancelButton', daCancelButton);

    daCancelButton.$inject = [];
    function daCancelButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: CancelButtonController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                cancel: '&',
                modal: '='
            },
            templateUrl: 'src/client/app/widgets/buttons/da-cancel-button.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function CancelButtonController () {

    }
})();
