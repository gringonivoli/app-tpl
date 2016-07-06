(function() {
    'use strict';

    angular
        .module('app.test')
        .controller('TestController', TestController);

    TestController.$inject = [];
    function TestController() {
        var vm = this;

        activate();

        ////////////////

        function activate() { }
    }
})();
