/**
 * Created by Van on 10/01/2017.
 */
SWDApp.controller('MovieController', function($scope,$mdDialog,$rootScope,MovieService,$controller,BaseService) {

    $controller('BaseController', {$scope: $scope});

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.view = SCREEN_MOVIE;
        if (!$rootScope.selectIndex) {
            $rootScope.selectIndex = NOW_SHOWING;
            localStorage.setItem(LOCAL_SELECT_INDEX,JSON.stringify($rootScope.selectIndex));
        }
    }

    function initData() {
        BaseService.getAPI(URL_MOVIE_SOON,'',getSoonSuccess, getSoonFail);
        BaseService.getAPI(URL_MOVIE_NOW,'',getNowSuccess, getSoonFail);
    }

    function getNowSuccess(response){
        $scope.listFilmNow = response.data;
    }
    function getSoonSuccess(response){
        $scope.listFilmSoon = response.data;
    }
    function getSoonFail(){
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }

    $scope.setData = function(value,boolean){
        MovieService.setItem(value);
        if(boolean == false){
            $rootScope.selectIndex = COMING_SOON;
        }
        localStorage.setItem(LOCAL_SELECT_INDEX,JSON.stringify($rootScope.selectIndex));
    };

});