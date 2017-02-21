/**
 * Created by Van on 06/01/2017.
 */
SWDApp.controller('HomeController', function($scope, $mdDialog, $mdMedia,$location,
                                             $translate,$rootScope, MovieService,$controller,LoginService,BaseService) {

    $controller('BaseController', {$scope: $scope});

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.prePage = $rootScope.currentPage;
        $rootScope.currentPage = HOME_PAGE;
        $rootScope.view = 0;
        $rootScope.selectIndex=0;
        $scope.lang = LANG_EN;
    }

    function getSoonSuccess(response){
        $scope.listFilmSoon = response.data;
        localStorage.setItem(LOCAL_MOVIE_SOON,JSON.stringify($scope.listFilmSoon));
    }
    function getSoonFail(){
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }
    function initData() {
        BaseService.getAPI(URL_MOVIE,'',getSoonSuccess, getSoonFail);
    }

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

    $scope.go = function (value) {
        if(value ==1){
            $rootScope.selectIndex=1;
        }else{
            $rootScope.selectIndex=0;
        }

    };

    $scope.setData = function(value){
        MovieService.setItem(value);
    };
    
    $scope.logoutConfirm = function(){
        $scope.showConfirm('','Logout', "Are you sure to logout?",function () {
            $rootScope.logged = false;
            LoginService.ClearCredentials();
            localStorage.removeItem(LOCAL_USER_INFO);
            if($location.path() == '/admin') {
                $location.path('/');
            }
        },'')
    }
});