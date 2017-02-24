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
    }

    function initData() {
        $scope.listFilmNow = localStorage.getItem(LOCAL_MOVIE_NOW);
        $scope.listFilmSoon = localStorage.getItem(LOCAL_MOVIE_SOON);
        BaseService.getAPI(URL_MOVIE_SOON,'',getSoonSuccess, getSoonFail);
        BaseService.getAPI(URL_MOVIE_NOW,'',getNowSuccess, getSoonFail);
    }

    function getNowSuccess(response){
        $scope.listFilmNow = response.data;
        localStorage.setItem(LOCAL_MOVIE_NOW,JSON.stringify($scope.listFilmNow));
    }
    function getSoonSuccess(response){
        $scope.listFilmSoon = response.data;
        localStorage.setItem(LOCAL_MOVIE_SOON,JSON.stringify($scope.listFilmSoon));
    }
    function getSoonFail(){
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }

    $scope.go = function (value) {
        if(value == NOW_SHOWING){
            $rootScope.selectIndex= NOW_SHOWING;
            localStorage.setItem(LOCAL_SELECT_INDEX,JSON.stringify($rootScope.selectIndex));
        }else{
            $rootScope.selectIndex= COMING_SOON;
            localStorage.setItem(LOCAL_SELECT_INDEX,JSON.stringify($rootScope.selectIndex));
        }

    };

    $scope.setData = function(value,boolean){
        MovieService.setItem(value);
        if(boolean == false){
            $rootScope.selectIndex = COMING_SOON;
        }
        localStorage.setItem(LOCAL_SELECT_INDEX,JSON.stringify($rootScope.selectIndex));
    };
});