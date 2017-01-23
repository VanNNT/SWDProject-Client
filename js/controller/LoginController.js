/**
 * Created by Van on 08/01/2017.
 */
SWDApp.controller('LoginController', function($scope,$mdDialog,$controller) {
    $controller('BaseController', {$scope: $scope});

   $scope.Login = function () {

   };

   $scope.closePopUp = function () {
       $mdDialog.cancel();
   }
});