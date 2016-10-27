(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daBasicWindow', daBasicWindow);

    daBasicWindow.$inject = [];
    function daBasicWindow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: BasicWindowController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                title: '=windowTitle'
            },
            templateUrl: 'src/client/app/widgets/da-basic-window.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function BasicWindowController () {

    }
})();
