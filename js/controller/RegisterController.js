/**
 * Created by VanNNT on 3/3/2017.
 */
SWDApp.controller('RegisterController', function ($scope, $controller) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController() {
        $scope.userRegister = {
            inputBirthday: new Date()
        };
    }
    $scope.signup = function () {
        console.log($scope.userRegister.inputBirthday.toISOString().substr(0, 10));
        console.log($scope.userRegister);
    };
});