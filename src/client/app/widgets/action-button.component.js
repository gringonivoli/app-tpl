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

    ActionButtonController.$inject = ['$timeout'];
    function ActionButtonController($timeout) {

        var vm = this;

        ////////////////

        vm.$onInit = function() {
            vm.click = function () {
                $timeout(vm.action, 0);
            };
            vm.color = vm.color || 'btn-primary';
        };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };
    }
})();
