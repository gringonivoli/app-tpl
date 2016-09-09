(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('daInfoBar', daInfoBar);

    daInfoBar.$inject = [];
    function daInfoBar() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: InfoBarController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                sucursal: '=',
                title: '=pageTitle',
                prefix: '@prefixOut'
            },
            templateUrl: 'src/client/app/widgets/da-info-bar.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function InfoBarController () {
        var vm = this;
    }
})();
