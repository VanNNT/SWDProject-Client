/**
 * Created by Van on 07/02/2017.
 */
SWDApp.controller('UpdateInfoController', function($scope,$mdDialog,$controller,$sce,$rootScope,$translate) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
        initView();
    }

    function initData() {
         if(!$scope.itemMovie){
             $scope.readonly = false;
             $scope.title = $translate.instant('admin.add');
             $scope.startDate = new Date();
             $scope.endDate = new Date();
         }else{
             $scope.readonly = true;
             $scope.title = $scope.itemMovie.movieName;
             $scope.nameMovie = $scope.itemMovie.movieName;
             $scope.posterMovie = $scope.itemMovie.picture;
             $scope.movieGenre = $scope.itemMovie.genre;
             $scope.desMovie = $scope.itemMovie.introduction;
             $scope.startDate = new Date($scope.itemMovie.startDate);
             $scope.endDate = new Date($scope.itemMovie.endDate);
             $scope.movieActor = $scope.itemMovie.actor;
             $scope.movieTrailer = $scope.itemMovie.trailer;
             $scope.trailer = $sce.trustAsResourceUrl($scope.itemMovie.trailer);

         }
    }

    function initView(){
        $scope.startMinDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth(), $scope.startDate.getDate()
        );
        $scope.endMinDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth(), $scope.startDate.getDate()+1
        );
        $scope.startMaxDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth() + 4, $scope.startDate.getDate()
        );
    }
    $scope.close = function () {
        $rootScope.isShowInfo = false;
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
    $scope.showPopup = function (ev) {
        $mdDialog.show({
            templateUrl: 'view/admin/popupWeb.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };

    $scope.$on("$destroy", function() {
        delete  $rootScope.isShowInfo;
    });

});