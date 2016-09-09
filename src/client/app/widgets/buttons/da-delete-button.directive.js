(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daDeleteButton', daDeleteButton);

    daDeleteButton.$inject = [];
    function daDeleteButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: DeleteButtonController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                delete: '&'
            },
            templateUrl: 'src/client/app/widgets/buttons/da-delete-button.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function DeleteButtonController () {

    }
})();
