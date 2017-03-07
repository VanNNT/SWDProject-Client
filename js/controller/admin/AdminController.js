/**
 * Created by Van on 02/02/2017.
 */
SWDApp.controller('AdminController', function($scope,$mdDialog,$translate,$mdMedia,$rootScope,$controller,BaseService) {

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

    $scope.updateMovie = function (data) {
        _.any($scope.listFilm,function (i) {
             if(i.movieId == data.movieID){
                 i.movieName = data.movieName;
                 i.picture = data.picture;
                 i.genre = data.genre;
                 i.introduction =data.introduction;
                 i.startDate = data.startDate;
                 i.endDate=data.endDate;
                 i.actor =data.actor;
                 i.length =data.lenght;
                 i.trailer =data.trailer;
                 return true;
             }
        })
    };

    $scope.createMovie = function(data){
        $scope.listFilm.unshift(data);
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

    var itemDelete = '';
    $scope.delete = function (item) {
        $scope.showConfirm('',$translate.instant('message.confirm'),$translate.instant('message.confirmDelete'),
            // OK
            function () {
                itemDelete = item;
                var data = {
                    'movieID': item.movieId
                };
                BaseService.postAPI(URL_DELETE_MOVIE,data,deleteSuccess,saveFail);
            }, function() {})
    };

    function deleteSuccess(response){
        $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.deleteMovie'));
        BaseService.getAPI(URL_ALL_MOVIE,'',getAllSuccess, getAllFail);

    }
    function saveFail() {
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }
});