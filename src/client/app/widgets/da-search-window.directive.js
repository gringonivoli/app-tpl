(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daSearchWindow', daSearchWindow);

    daSearchWindow.$inject = [];
    function daSearchWindow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: SearchWindowController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                title: '=windowTitle',
                newi: '='
            },
            templateUrl: 'src/client/app/widgets/da-search-window.html',
            transclude: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function SearchWindowController () {

    }
})();
