/**
 * Created by Van on 02/02/2017.
 */
SWDApp.controller('AdminController', function($scope,$mdDialog,$mdMedia,$rootScope,$controller,$location) {

    $controller('BaseController', {$scope: $scope});

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.view = SCREEN_ADMIN;
    }

    function initData() {
        $rootScope.prePage = $rootScope.currentPage;
        $rootScope.currentPage = ADMIN_PAGE;
        //$scope.listFilm = JSON.parse(localStorage.getItem(LOCAL_MOVIE_SOON));
        $scope.listFilm = JSON.parse(localStorage.getItem(LOCAL_ALL_MOVIES));
    }

    $scope.showPageInfo = function(){
        $location.path('/add-movie');
    };
    $scope.showTime = function (ev) {
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: 'showtimeController',
            templateUrl: 'view/admin/showtimeInfo.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };
    // SortData

    $scope.sortColumn = 'name';
    $scope.reverse = false;

    $scope.sortData = function(column){
        if($scope.sortColumn == column)
            $scope.reverse = !$scope.reverse;
        else
            $scope.reverse = false;
        $scope.sortColumn = column;
    };
    $scope.getSortClass = function (column) {
        if($scope.sortColumn == column){
            return $scope.reverse ? 'arrow-up':'arrow-down'
        }
        return '';
    };


});