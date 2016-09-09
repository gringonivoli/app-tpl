(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daFecha', daFecha);

    daFecha.$inject = [];
    function daFecha() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: FechaController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                fecha: '=ngModel',
                maxDate: '=',
                minDate: '=',
                form: '=',
                label: '='
            },
            templateUrl: 'src/client/app/widgets/da-fecha.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    FechaController.$inject = ['validateService', 'formatDate'];
    /* @ngInject */
    function FechaController(validateService, formatDate) {

        var vm = this;
        vm.validate = validateService;
        vm.openFecha = openFecha;
        vm.fechaOptions = {
            maxDate: vm.maxDate,
            minDate: vm.minDate
        };
        vm.format = formatDate;
        vm.popup = {opened: false};
        activate();

        ////////////////

        function activate() {
        }

        function openFecha() {
            vm.popup.opened = true;
        }
    }
})();
