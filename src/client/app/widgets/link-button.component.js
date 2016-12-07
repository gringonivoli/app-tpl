(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.widgets')
        .component('linkButton', {
            templateUrl: 'src/client/app/widgets/link-button.component.html',
            controller: LinkButtonController,
            controllerAs: 'vm',
            bindings: {
                label: '@',
                state: '@',
                icon: '@?',
                color: '@?'
            },
        });

    LinkButtonController.$inject = [];
    function LinkButtonController() {

        var vm = this;

        ////////////////

        vm.$onInit = function() {
            vm.color = vm.color || 'btn-primary';
        };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };
    }
})();
