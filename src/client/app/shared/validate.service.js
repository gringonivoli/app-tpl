(function () {
    'use strict';

    angular
        .module('app.shared')
        .factory('validateService', validateService);

    validateService.$inject = ['logger'];
    function validateService(logger) {
        var service = {
            element: validateElement,
            form: validateForm,
            resetForm: resetForm,
            simpleElement: simpleElementValidate,
            detail: detail
        };

        return service;

        ////////////////

        function resetForm(form) {
            form.$setPristine();
            form.$setUntouched();
        }

        function validateElement(formElement) {
            var css = '';
            if (formElement &&
                formElement.hasOwnProperty('$touched') &&
                formElement.hasOwnProperty('$invalid')) {

                if (formElement.$touched && formElement.$invalid) {
                    css = 'has-error';
                } else if (formElement.$touched && !formElement.$invalid) {
                    css = 'has-success';
                }
            }
            return css;
        }

        function simpleElementValidate(formElement) {
            var css = '';
            if (formElement &&
                formElement.hasOwnProperty('$invalid')) {

                if (formElement.$invalid) {
                    css = 'has-error';
                } else if (!formElement.$invalid) {
                    css = 'has-success';
                }
            }
            return css;
        }

        function validateForm(form) {
            var valid = form.$valid;
            if (!valid) {
                showError('Formulario Inválido', 'Ups! Asegúrese de completar todos los ' +
                'campos requeridos y/o ' +
                'hacerlo con datos válidos.');
            }
            return valid;
        }

        function detail(detail) {
            if (angular.isArray(detail) || (detail.length === 0)) {
                showError('Formulario Inválido', 'Los detalles parecen estar vacíos!');
            }
        }

        function showError(title, msg) {
            logger.error(msg, '', title);
        }
    }
})();
