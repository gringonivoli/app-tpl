(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.widgets')
        .component('actionButton', {
            templateUrl: 'src/client/app/widgets/action-button.component.html',
            controller: ActionButtonController,
            controllerAs: 'vm',
            bindings: {
                label: '@',
                action: '&',
                icon: '@?',
                color: '@?'
            },
        });

    ActionButtonController.$inject = [];
    function ActionButtonController() {

        var vm = this;
        vm.click = vm.action;

        ////////////////

        vm.$onInit = function() {
            vm.color = vm.color || 'btn-primary';
        };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };
    }
})();
