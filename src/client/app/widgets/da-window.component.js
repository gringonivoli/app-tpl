(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.widgets')
        .component('daWindow', {
            transclude: true,
            templateUrl: 'src/client/app/widgets/da-window.component.html',
            controller: DaWindowController,
            controllerAs: 'vm',
            bindings: {
                title: '@',
                search: '@?',
                newi: '@?',
                print: '&?'
            },
        });

    DaWindowController.$inject = [];
    function DaWindowController() {

        var vm = this;

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };
    }
})();
