(function() {
    'use strict';

    angular
        .module('app.decorators')
        .directive('daAuth', daAuth);

    daAuth.$inject = ['auth', '$rootScope'];
    /* @ngInject */
    function daAuth(auth, $rootScope) {
        // Usage: Oculta o muestra elementos html
        // evaluando si el usurario esta o no
        // autenticado en el sistema. Esto solo
        // es estético ya que es facilmente
        // hackeable, por lo que se recomienda
        // siempre realizar las comprobaciones
        // necesarias del lado servidor.
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            determineVisibility();
            scope.$on('$stateChangeSuccess', function() {
                determineVisibility();
            });

            function determineVisibility() {
                if (auth.getAuth() && attrs.daAuth === 'auth') {
                    makeVisible();
                } else {
                    makeHidden();
                }
            }

            function makeVisible() {
                element.removeClass('hidden');
            }

            function makeHidden() {
                element.addClass('hidden');
            }
        }
    }
})();
