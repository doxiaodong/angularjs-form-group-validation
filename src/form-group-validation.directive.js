(function (angular) {

    angular.module('formGroup.validation', ['formGroup.validation.service', 'formGroup.item'])

        .directive('formGroupValidation', function () {
            return {
                restrict: 'AE',
                scope: {
                    _formGroupForm: '=formGroupValidation'
                },
                controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

                    _formGroup = {
                        name: $attrs.name,
                        list: []
                    };

                    if (!_formGroup.name) {
                        return;
                    }

                    $scope._formGroupForm[_formGroup.name] = {};

                    this.init = function () {
                        return {
                            form: $scope._formGroupForm,
                            formGroup: _formGroup
                        };
                    };
                }]
            };
        });

})(angular);