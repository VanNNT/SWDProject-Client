/**
 * Created by Van on 08/01/2017.
 */
SWDApp.controller('LoginController', function ($scope,$rootScope, $mdDialog, $controller, BaseService,LoginService,$translate) {
    $controller('BaseController', {$scope: $scope});

    function LoginSuccessful(response) {
        if(!response.data.errorCode){
            LoginService.SetCredentials(response.data.nameOfCustomer, $scope.password);
            $rootScope.logged = true;
            $rootScope.nameUser = response.data.nameOfCustomer;
            $mdDialog.hide();
            localStorage.setItem(LOCAL_USER_INFO,JSON.stringify(response.data));
        }else{
            $scope.error = true;
            $scope.errorMsg = $translate.instant('errors.' + response.data.errorCode)
        }
    };
    function LoginFail() {
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    };
    $scope.Login = function () {
        var data = {
            'username' : $scope.username,
            'password': $scope.password
        };
        BaseService.postAPI(URL_LOGIN, data, LoginSuccessful, LoginFail);
    };

    $scope.closePopUp = function () {
        $mdDialog.cancel();
    }
});