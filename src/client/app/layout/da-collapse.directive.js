(function () {
    'use strict';
    angular.module('app.layout')
        .directive('daCollapse', daCollapse);

    function daCollapse() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).on('click', function () {
                    $('.collapse').collapse('hide');
                });
            }
        };
    }
} ());
