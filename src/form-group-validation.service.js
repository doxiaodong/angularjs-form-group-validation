(function(angular) {

	angular.module('formGroup.item', [])
	.service('formGroupValidationService', function() {
		this.validationCheck = function(arrList) {
			var res = {
				invalid: false,
				dirty: false
			};
			angular.forEach(arrList, function(value) {
				if (value.$invalid) {
					res.invalid = true;
				}
				if (value.$dirty) {
					res.dirty = true;
				}
			});
			return res;
		};
	});

})(angular);