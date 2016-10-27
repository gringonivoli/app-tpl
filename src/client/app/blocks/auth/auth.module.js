(function() {
    'use strict';

    angular.module('blocks.auth', [
        'ui.router',
        'angular-storage',
        'blocks.logger',
        'angular-jwt'
    ])
    .run(run);

    // Just init the service.
    run.$inject = ['auth'];
    function run(auth) {}
})();
