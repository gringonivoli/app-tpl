(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daErrorBlock', daErrorBlock);

    daErrorBlock.$inject = [];
    function daErrorBlock() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ErrorBlockController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                'formElement': '=element'
            },
            templateUrl: 'src/client/app/widgets/da-error-block.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ErrorBlockController () {
        var vm = this;
    }
})();
