/**
 * Created by Van on 10/01/2017.
 */
SWDApp.controller('MovieController', function($scope,$mdDialog,$rootScope,MovieService,$controller) {

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
        $scope.listFilmSoon = JSON.parse(localStorage.getItem(LOCAL_MOVIE_SOON));
        $scope.listFilmNow = JSON.parse(localStorage.getItem(LOCAL_MOVIE_NOW));
    }

    $scope.setData = function(value,boolean){
        MovieService.setItem(value);
        if(boolean == false){
            $rootScope.selectIndex = COMING_SOON;
            localStorage.setItem(LOCAL_SELECT_INDEX,JSON.stringify($rootScope.selectIndex));
        }
    };

});