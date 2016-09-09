(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daSearchbox', daSearchbox);

    daSearchbox.$inject = [];
    function daSearchbox() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: SearchBoxController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                query: '=ngModel'
            },
            templateUrl: 'src/client/app/widgets/da-searchbox.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function SearchBoxController() {
    }
})();
