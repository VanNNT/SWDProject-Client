/**
 * Created by VanNNT on 2/21/2017.
 */
SWDApp.controller('IndexController', function($scope, $mdDialog, $mdMedia,$location,
                                             $translate,$rootScope,$controller,LoginService) {

    $controller('BaseController', {$scope: $scope});

    $scope.lang = LANG_EN;

    $scope.showLoginFrom = function (ev) {
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: 'LoginController',
            templateUrl: 'view/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };

    $scope.changeLanguage = function (key) {
        $translate.use(key);
        if(key=='en'){
            $scope.lang = LANG_EN;
        }else{
            $scope.lang = LANG_VI;
        }
    };

    $scope.logoutConfirm = function(){
        $scope.showConfirm('','Logout', "Are you sure to logout?",function () {
            $rootScope.logged = false;
            LoginService.ClearCredentials();
            localStorage.removeItem(LOCAL_USER_INFO);
            if($location.path() == '/admin' || $location.path() == '/add-movie') {
                $location.path('/');
            }
        },'')
    }
});