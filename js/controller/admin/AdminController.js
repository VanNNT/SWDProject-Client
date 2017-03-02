/**
 * Created by Van on 02/02/2017.
 */
SWDApp.controller('AdminController', function($scope,$mdDialog,$mdMedia,$rootScope,$controller,BaseService) {

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

        BaseService.getAPI(URL_ALL_MOVIE,'',getAllSuccess, getAllFail);
    }

    function getAllSuccess(response){
        $scope.listFilm = response.data;
    }
    function getAllFail(){
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }

    $scope.showPageInfo = function(item){
        $scope.itemMovie = item;
        $rootScope.isShowInfo = true;
    };
    $scope.showTime = function (ev,item) {
        $scope.itemTime = item;
        $rootScope.isShow = true;
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