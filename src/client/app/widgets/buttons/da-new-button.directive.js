(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daNewButton', daNewButton);

    daNewButton.$inject = [];
    function daNewButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: NewButtonController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                state: '='
            },
            templateUrl: 'src/client/app/widgets/buttons/da-new-button.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NewButtonController () {

    }
})();
