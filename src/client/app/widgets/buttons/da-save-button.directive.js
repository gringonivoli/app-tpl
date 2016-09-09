(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daSaveButton', daSaveButton);

    daSaveButton.$inject = [];
    function daSaveButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: SaveButtonController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                save: '&'
            },
            templateUrl: 'src/client/app/widgets/buttons/da-save-button.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function SaveButtonController () {

    }
})();
