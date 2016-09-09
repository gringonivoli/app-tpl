(function () {
    'use strict';
    angular.module('app.shared')
        .filter('dict', dict);

    dict.$inject = ['DICT'];
    function dict(DICT) {
        return function (input) {
            return DICT[input] || input;
        };
    }
} ());
