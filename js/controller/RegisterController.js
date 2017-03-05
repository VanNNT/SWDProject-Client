/**
 * Created by VanNNT on 3/3/2017.
 */
SWDApp.controller('RegisterController', function ($scope, $controller, $translate) {
    $controller('BaseController', {$scope: $scope});
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.signup = function () {
       var userRegister = $scope.userRegister;
        if (typeof $scope.userRegister === "undefined"){
            $scope.userRegister = {
                username: undefined,
                password: undefined,
                confirm: undefined,
                name: undefined,
                inputBirthday: new Date()
            };
            userRegister = $scope.userRegister;
        }
        if (typeof userRegister.inputBirthday === "undefined"){
            userRegister.inputBirthday = new Date();
        }
        if ($scope.userRegister.password !== $scope.userRegister.confirm) {
             $scope.showAlert('', $translate.instant('message.error'), $translate.instant('Password and Confirm password must match'));
        } else {
             var userBirthday =userRegister.inputBirthday;
             var birthday = userBirthday.getFullYear()+"-"+("0" + (userBirthday.getMonth() + 1)).slice(-2)+"-"+("0" + userBirthday.getDate()).slice(-2);
            console.log(birthday);
            //output birthday formated to yyyy-MM-dd
            $scope.userRegister.outputBirthday = birthday;
            console.log($scope.userRegister);
        }
       
    };
});