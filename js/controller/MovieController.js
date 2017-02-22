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
            $rootScope.selectIndex = 0;
        }
    }

    function initData() {
        $scope.listFilmSoon = JSON.parse(localStorage.getItem(LOCAL_MOVIE_SOON));
        $scope.listFilmNow = JSON.parse(localStorage.getItem(LOCAL_MOVIE_NOW));
    }

    $scope.setData = function(value){
        MovieService.setItem(value);
    }
});