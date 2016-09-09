(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daHeadTable', daHeadTable);

    daHeadTable.$inject = [];
    function daHeadTable() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: HeadTableController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
                fields: '=',
                sortedFields: '=sorted',
                sort: '=model'
            },
            templateUrl: 'src/client/app/widgets/da-head-table.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function HeadTableController() {

        var vm = this;

        vm.sort = function(field) {
            if (vm.isSortedField(field)) {
                vm.sort.field = field;
                vm.sort.order = !vm.sort.order;
            }
        };

        vm.isSortedField = function(field) {
            var tmp = false;
            for (var i in vm.sortedFields) {
                if (vm.sortedFields[i] === field) {
                    tmp = true;
                    break;
                }
            }
            return tmp;
        };
    }
})();
