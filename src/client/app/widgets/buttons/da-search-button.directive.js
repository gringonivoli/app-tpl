(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daSearchButton', daSearchButton);

    daSearchButton.$inject = [];
    function daSearchButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: SearchButtonController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                state: '='
            },
            templateUrl: 'src/client/app/widgets/buttons/da-search-button.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function SearchButtonController () {

    }
})();
