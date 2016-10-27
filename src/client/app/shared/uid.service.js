// jshint -W016
(function () {
    'use strict';

    angular
        .module('app.shared')
        .factory('uid', uid);

    uid.$inject = [];
    function uid() {

        var cache = [
            '',
            ' ',
            '  ',
            '   ',
            '    ',
            '     ',
            '      ',
            '       ',
            '        ',
            '         '
        ];

        var service = {
            get: get
        };

        return service;

        ////////////////
        function get(prefix, sufix, length, pad) {
            prefix = prefix ? prefix : '';
            sufix = sufix ? sufix : '';
            length = length ? length : 0;
            pad = pad ? pad : 0;

            return leftPad(prefix + Math.round(new Date().getTime()) + sufix, length, pad);
        }

        function leftPad(str, len, ch) {
            // convert `str` to `string`
            str = str + '';

            // doesn't need to pad
            len = len - str.length;
            if (len <= 0) {
                return str;
            }

            // convert `ch` to `string`
            if (!ch && ch !== 0) {
                ch = ' ';
            }
            ch = ch + '';
            if (ch === ' ' && len < 10) {
                return cache[len] + str;
            }
            var pad = '';
            while (true) {
                if (len & 1) {
                    pad += ch;
                }
                len >>= 1;
                if (len) {
                    ch += ch;
                }
                else {
                    break;
                }
            }
            return pad + str;
        }
    }
})();
