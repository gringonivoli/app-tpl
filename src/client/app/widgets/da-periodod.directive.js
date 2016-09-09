(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daPeriodo', daPeriodo);

    daPeriodo.$inject = [];
    function daPeriodo() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: PeriodoController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                fechaDesde: '=',
                fechaHasta: '=',
                form: '='
            },
            templateUrl: 'src/client/app/widgets/da-periodo.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    PeriodoController.$inject = ['validateService', 'formatDate'];
    /* @ngInject */
    function PeriodoController(validateService, formatDate) {

        var vm = this;
        vm.validate = validateService;
        vm.openFechaDesde = openFechaDesde;
        vm.openFechaHasta = openFechaHasta;
        vm.fechaDesdeOptions = {
            maxDate: vm.fechaHasta
        };
        vm.fechaHastaOptions = {
            minDate: vm.fechaDesde
        };
        vm.format = formatDate;
        vm.popupDesde = {opened: false};
        vm.popupHasta = {opened: false};
        vm.updateMaxDateFechaDesde = updateMaxDateFechaDesde;
        vm.updateMinDateFechaHasta = updateMinDateFechaHasta;
        activate();

        ////////////////

        function activate() {
        }

        function openFechaDesde() {
            vm.popupDesde.opened = true;
        }

        function openFechaHasta() {
            vm.popupHasta.opened = true;
        }

        function updateMinDateFechaHasta() {
            vm.fechaHastaOptions.minDate = vm.fechaDesde;
        }

        function updateMaxDateFechaDesde() {
            vm.fechaDesdeOptions.maxDate = vm.fechaHasta;
        }
    }
})();
