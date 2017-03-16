/**
 * Created by VanNNT on 3/3/2017.
 */
SWDApp.controller('RegisterController', function ($scope, $controller, $translate, BaseService) {
    $controller('BaseController', {$scope: $scope});

    initController();
    function initController(){
        $scope.userRegister ={
            inputBirthday: new Date()
        };
       var now = new Date() 
        $scope.maxInputBirthday = new Date(
            now.getFullYear()-12, now.getMonth(), now.getDate()
        );
        
    }     
         
    function SignUpSuccess(response) {
        if(!response.data.errorCode){
           console.log("response")
            console.log(response.data);
            $scope.showAlert('', $translate.instant('Successful'), $translate.instant('Your account register successfully'));
            setTimeout(function(){
                 
                window.location.href= "/index.html";
            }, 500);
       
        }
        else {
            $scope.showAlert('', $translate.instant('message.error'), $translate.instant(response.data.message)); 
        }
            
    }
    
    function SignUpFail(){
         $scope.showAlert('', $translate.instant('message.error'), $translate.instant('Error'));
    }
    
    $scope.signup = function () {
       
        console.log($scope.userRegister.inputBirthday.toISOString().substr(0, 10));
        console.log($scope.userRegister);
        $scope.userRegister.birthdate = $scope.userRegister.inputBirthday.toISOString().substr(0, 10);
        BaseService.postAPI(URL_REGISTER, $scope.userRegister, SignUpSuccess, SignUpFail);
        
    };
});