(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daNewWindow', daNewWindow);

    daNewWindow.$inject = [];
    function daNewWindow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: NewWindowController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                title: '=windowTitle',
                search: '='
            },
            templateUrl: 'src/client/app/widgets/da-new-window.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NewWindowController () {

    }
})();
