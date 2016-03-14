(function(angular) {

	angular.module('formGroup.validation.service', [])

	.directive('formGroupItem', ['formGroupValidationService', function(formGroupValidationService) {
		return {
			restrict: 'A',
	    require: ['^formGroupValidation', '?ngModel'],
	    link: function(scope, element, attrs, ctrls) {

	    	var formGroupValidationCtrl = ctrls[0];
	    	var ngModelCtrl = ctrls[1];

	    	if (!formGroupValidationCtrl.init) {
	    		return;
	    	}

	    	var init = formGroupValidationCtrl.init();

	    	var _form = init.form;
	    	var _formGroup = init.formGroup;
	    	_formGroup.list.push(ngModelCtrl);

	    	var formGroupNg = _form[_formGroup.name];

	    	ngModelCtrl.$validators.formGroupItem = function(modelValue, viewValue) {
	    		validationChecked = formGroupValidationService.validationCheck(_formGroup.list);
	    		formGroupNg.$valid = !validationChecked.invalid;
	    		formGroupNg.$invalid = validationChecked.invalid;

	    		formGroupNg.$dirty = validationChecked.dirty;

	    		return true; // always return true to ensure no effect by formGroupItem
	    	};

	    }
		};
	}]);

})(angular);