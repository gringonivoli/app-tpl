(function() {
    'use strict';

    angular.module('blocks.history', [
        'ui.router',
        'angular-storage'
    ])
    .run(run);

    // Just init the services.
    run.$inject = ['history', 'historyStorage'];
    function run(history, historyStorage) {}
})();
