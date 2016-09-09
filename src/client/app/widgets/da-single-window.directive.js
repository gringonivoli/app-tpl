(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daSingleWindow', daSingleWindow);

    daSingleWindow.$inject = [];
    function daSingleWindow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: SingleWindowController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                title: '=windowTitle',
                search: '=',
                print: '='
            },
            templateUrl: 'src/client/app/widgets/da-single-window.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function SingleWindowController () {

    }
})();
