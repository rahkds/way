var module = angular.module('Home');

module.controller('homeCtrl', ['$scope', function($scope) {

	$scope.calInfo = {
		display: '',
		opr: null,
		operator: null,
		isSecondOpr: false,
	};

	$scope.clicknumber = function(number) {
		if (number) {
			if ($scope.calInfo['isSecondOpr']) {
				$scope.calInfo.opr = $scope.calInfo.display ? parseFloat($scope.calInfo.display) : 0;
				$scope.calInfo.display = number;
				$scope.calInfo.isSecondOpr = false;
			} else {
				if (number == '.' && $scope.calInfo.display.includes('.')) {
					return;
				}
				$scope.calInfo.display += number;
			}
		}

	}

	$scope.clickopr = function(opr) {
		if (opr) {
			if ($scope.calInfo.isSecondOpr) {
				return;
			}
			if ($scope.calInfo.operator) {
				$scope.calResult($scope.calInfo.operator);
			}

			$scope.calInfo.operator = opr;
			$scope.calInfo.isSecondOpr = true;
			$scope.calInfo.opr = $scope.calInfo.display ? parseFloat($scope.calInfo.display) : 0;

		}

	}

	$scope.calResult = function(opr) {
		var displayValue = $scope.calInfo.display ? parseFloat($scope.calInfo.display) : 0;
		switch (opr) {
			case '+':
				$scope.calInfo.display = parseFloat($scope.calInfo.opr) + displayValue;
				break;
			case '/':
				$scope.calInfo.display = parseFloat($scope.calInfo.opr) / displayValue;
				break;
			case '-':
				$scope.calInfo.display = parseFloat($scope.calInfo.opr) - displayValue;
				break;
			case '*':
				$scope.calInfo.display = parseFloat($scope.calInfo.opr) * displayValue;
				break;
		}
	}

	$scope.clickequal = function() {
		if ($scope.calInfo.display && $scope.calInfo.opr && $scope.calInfo.operator) {
			$scope.calResult($scope.calInfo.operator);
		}
		$scope.calInfo.operator = null;
	}

	$scope.clear = function() {
		$scope.calInfo = {
			display: '',
			opr: null,
			operator: null,
			isSecondOpr: false,
		};
	}

}]);