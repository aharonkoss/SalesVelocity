var vWhatIf = angular.module('WhatIf', []);

vWhatIf.controller('NavController', function ($scope)
{ //begin NavController
    //Initially show the what if div tag and hide the def div tag
    $scope.whatifclass = 'clsshow';
    $scope.defclass = 'clshid';
    $scope.csswhatif = 'active';
    $scope.cssdef = 'success';
    $scope.goWhatIf = function()
    { //begin goWhatIf
        $scope.whatifclass = 'clsshow';
        $scope.defclass = 'clshid';
        $scope.csswhatif = 'active';
        $scope.cssdef = 'success';

    } //end goWhatIf
    $scope.goDef = function()
    { //begin goDef
        $scope.whatifclass = 'clshid';
        $scope.defclass = 'clsshow';
        $scope.csswhatif = 'success';
        $scope.cssdef = 'active';
    } //end goDef
});
vWhatIf.controller('SVController', function ($scope)
  { //begin SVController
    $scope.scenarios = {sv: 2000000, ads: 500000, wlr: 0.5, atc: 90};
    var ReCalcScenario = function ()
    { //begin ReCalcScenario
      $scope.sro = $scope.scenarios.sv / (($scope.scenarios.ads * $scope.scenarios.wlr)/($scope.scenarios.atc / 30))
    } //end ReCalcScenario
      $scope.$watch('scenarios.sv', ReCalcScenario);
      $scope.$watch('scenarios.ads', ReCalcScenario);
      $scope.$watch('scenarios.wlr', ReCalcScenario);
      $scope.$watch('scenarios.atc', ReCalcScenario);
}); //end  SVController
angular.module('WhatIf')
    .filter('percentage', ['$filter', function($filter) {
        return function(input, decimals) {
            return $filter('number')(input*100, decimals)+'%';
        };
    }]);
vWhatIf.directive("percentInput", function($filter){
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModelCtrl) {
            var listener = function () {
                var value = $element.val().replace(/,/g, '')
                $element.val($filter('percentage')(value, 2))
            }

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function (viewValue) {
                return +viewValue.replace(/,/g, '');
            })

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function () {
                $element.val($filter('percentage')(ngModelCtrl.$viewValue, 2))
            }

            $element.bind('change', listener)
            $element.bind('keydown', function (event) {
                var key = event.keyCode
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
                    return
                $browser.defer(listener) // Have to do this or changes don't get picked up properly
            })

            $element.bind('paste cut', function () {
                $browser.defer(listener)
            })
        }
    }
});
vWhatIf.directive('numberInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModelCtrl) {
            var listener = function () {
                var value = $element.val().replace(/,/g, '')
                $element.val($filter('number')(value, 2))
            }

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function (viewValue) {
                return +viewValue.replace(/,/g, '');
            })

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function () {
                $element.val($filter('number')(ngModelCtrl.$viewValue, 2))
            }

            $element.bind('change', listener)
            $element.bind('keydown', function (event) {
                var key = event.keyCode
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
                    return
                $browser.defer(listener) // Have to do this or changes don't get picked up properly
            })

            $element.bind('paste cut', function () {
                $browser.defer(listener)
            })
        }
    }
});
vWhatIf.directive('currencyInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModelCtrl) {
            var listener = function () {
                var value = $element.val().replace(/,/g, '')
                $element.val($filter('number')(value, false))
            }

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function (viewValue) {
                return +viewValue.replace(/,/g, '');
            })

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function () {
                $element.val($filter('number')(ngModelCtrl.$viewValue, false))
            }

            $element.bind('change', listener)
            $element.bind('keydown', function (event) {
                var key = event.keyCode
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
                    return
                $browser.defer(listener) // Have to do this or changes don't get picked up properly
            })

            $element.bind('paste cut', function () {
                $browser.defer(listener)
            })
        }
    }
});