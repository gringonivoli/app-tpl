(function() {
    'use strict';

    angular
        .module('app.param')
        .controller('ParamController', ParamController);

    ParamController.$inject = ['$stateParams', 'historyStorage', 'navigationHelper'];
    function ParamController($stateParams, historyStorage, navigationHelper) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.isModal = navigationHelper.isModal();
        vm.cancel = navigationHelper.back;

        vm.openChild = function (name, params) {
            historyStorage.set('param', 'jojojo');
            navigationHelper.openChild(name, params);
        };

        activate();

        ////////////////

        function activate() { }
    }
})();
