SWDApp.controller('AdminController', function($scope,$mdDialog,$rootScope,MovieService,$controller) {

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
        $scope.listFilm = JSON.parse(localStorage.getItem('MOVIE_LIST'));
    }

    $scope.setData = function(value){
        MovieService.setItem(value);
    }
});