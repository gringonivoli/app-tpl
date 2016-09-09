(function () {
    'use strict';
    angular.module('app.shared')
        .filter('labelCase', labelCase);

    function labelCase() {
        return function (input) {
            input = input.replace(/([A-Z-_])/g, ' $1');
            return input[0].toUpperCase() + input.slice(1);
        };
    }
} ());
