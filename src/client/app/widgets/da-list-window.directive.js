(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daListWindow', daListWindow);

    daListWindow.$inject = [];
    function daListWindow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ListWindowController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                title: '=windowTitle',
                print: '='
            },
            templateUrl: 'src/client/app/widgets/da-list-window.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ListWindowController () {

    }
})();
