/**
 * Created by VanNNT on 3/3/2017.
 */
SWDApp.controller('RegisterController', function ($scope, $controller, $translate, BaseService,$rootScope,$timeout,$location,LoginService) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController() {
        $scope.userRegister = {
            inputBirthday: new Date()
        };
    }
    function SignUpSuccess(response) {
        if(!response.data.errorCode){
            $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.account'));
            var data = {
                'username' : $scope.userRegister.username,
                'password': $scope.userRegister.password
            };
            BaseService.postAPI(URL_LOGIN, data, LoginSuccessful, SignUpFail);
        }
        else {
            $scope.showAlert('', $translate.instant('message.error'), $translate.instant(response.data.message)); 
        }
            
    }
    function LoginSuccessful(response) {
        if(!response.data.errorCode) {
            LoginService.SetCredentials(response.data.nameOfCustomer, response.data.role, response.data.userId, $scope.userRegister.password);
            $rootScope.logged = true;
            $rootScope.role = response.data.role;
            $rootScope.nameUser = response.data.nameOfCustomer;
            localStorage.setItem(LOCAL_USER_INFO, JSON.stringify(response.data));
            $location.path('/');
        }
    };
    function SignUpFail(){
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }
    
    $scope.signup = function () {
        $scope.userRegister.birthdate = $scope.userRegister.inputBirthday.toISOString().substr(0, 10);
        BaseService.postAPI(URL_REGISTER, $scope.userRegister, SignUpSuccess, SignUpFail);
    };
});