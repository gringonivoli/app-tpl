(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('daTopNav', daTopNav);

    daTopNav.$inject = [];
    function daTopNav() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                'navline': '=',
                'user': '='
            },
            templateUrl: 'src/client/app/layout/da-top-nav.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    TopNavController.$inject = ['rol', 'datacontext', 'logger'];
    /* @ngInject */
    function TopNavController (rol, datacontext, logger) {
        var vm = this;
        vm.isEnabled = isEnabled;
        vm.rol = rol;
        vm.notYet = notYet;

        function isEnabled() {
            return vm.user.rol === vm.rol.administrador;
        }

        function notYet() {
            logger.warning('Funcionalidad no implementada!', '', 'Ups!');
        }
    }
})();
