(function () {
    'use strict';
    angular.module('app.layout')
        .directive('daSubmenu', daSubmenu);

    function daSubmenu() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).on('click', function () {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass('open');
                    $(this).parent().toggleClass('open');
                });
            }
        };
    }
} ());
