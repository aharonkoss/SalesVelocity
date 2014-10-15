var vLoginApp = angular.module('LoginApp', []);

vLoginApp.controller('LoginController', function ($scope, $location, $window)
{ //begin LoginController
   $scope.goValidate = function()
   { //begin goValidate
       if ($scope.txtlogin == 'Demo' && $scope.txtpassword == 'Demo1234')
       { //begin if
           $window.location.href = 'SalesVelocityPlanner.html';
           $scope.vfeedback = 'You have been redirected but nothing happened?';
       } //end if
       else
       { //begin else
           $scope.txtlogin = '';
           $scope.txtpassword = '';
           $scope.vfeedback = 'Login Failed Try Again';
       } //end else
   } //end goValidate
}); //end LoginController