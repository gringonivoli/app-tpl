(function() {
    'use strict';

    angular
        .module('app.shared')
        .factory('pdfHelper', pdfHelper);

    pdfHelper.$inject = ['$window'];
    function pdfHelper($window) {

        var service = {
            newPdf: newPdf,
            open: open,
            getUrl: getUrl,
            openNewPdf: openNewPdf
        };

        return service;

        ////////////////
        function open(fileUrl) {
            $window.open(fileUrl);
        }

        function newPdf(data) {
            return new Blob([data], {type: 'application/pdf'});
        }

        function getUrl(file) {
            return URL.createObjectURL(file);
        }

        function openNewPdf(data) {
            return open(getUrl(newPdf(data)));
        }
    }
})();
