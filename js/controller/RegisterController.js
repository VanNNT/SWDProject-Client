/**
 * Created by VanNNT on 3/3/2017.
 */
SWDApp.controller('RegisterController', function ($scope, $controller) {
    $controller('BaseController', {$scope: $scope});
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.signup = function () {
       var userRegister = $scope.userRegister;
        if (typeof $scope.userRegister.birthday === "undefined"){
            $scope.userRegister.birthday = new Date();
        }
        console.log(userRegister);
    };
});