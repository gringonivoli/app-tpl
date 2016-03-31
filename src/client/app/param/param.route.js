(function() {
    'use strict';

    angular
        .module('app.param')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'param',
                config: {
                    url: '/param/:id',
                    templateUrl: 'src/client/app/param/param.html',
                    controller: 'ParamController',
                    controllerAs: 'vm',
                    title: 'Param'       
                }
            }
        ];
    }
})();
