/**
 * Created by Van on 07/02/2017.
 */
SWDApp.controller('updateInfoController', function($scope,$mdDialog,$controller,$sce,$rootScope) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
        initView();
    }

    function initData() {
        $rootScope.prePage = $rootScope.currentPage;
        $rootScope.currentPage = ADD_MOVIE_PAGE;
    }

    function initView(){
        $scope.startDate = new Date();
        $scope.endDate = new Date();
        $scope.startMinDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth(), $scope.startDate.getDate()
        );
        $scope.endMinDate = new Date(
            $scope.endDate.getFullYear(), $scope.endDate.getMonth(), $scope.endDate.getDate()+1
        );
        $scope.startMaxDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth() + 4, $scope.startDate.getDate()
        );
    }
    $scope.close = function () {
        $mdDialog.cancel();
    };
    $scope.clear = function (boolean) {
        if(boolean == true){
            $scope.posterMovie = '';
        }else{
            $scope.movieTrailer = '';
        }
    };
    $scope.setTrailer = function(){
            $scope.trailer = $sce.trustAsResourceUrl($scope.movieTrailer);
    };
    $scope.checkEndDate = function () {
        console.log($scope.startDate);
        console.log( $scope.startDate.toISOString().substr(0, 10));
        $scope.endMinDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth(), $scope.startDate.getDate()+1
        );
    };
    $scope.checkStartDate = function () {
        $scope.startMaxDate = new Date(
            $scope.endDate.getFullYear(), $scope.endDate.getMonth(), $scope.endDate.getDate()-1
        );
    };


});