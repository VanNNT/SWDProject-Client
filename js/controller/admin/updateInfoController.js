/**
 * Created by Van on 07/02/2017.
 */
SWDApp.controller('updateInfoController', function($scope,$mdDialog,$controller,$sce) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
        initView();
    }

    function initData() {

    }

    function initView(){
        if(!$scope.posterMovie){
            $scope.poster= 'img/cinema.png';
        }else{
            $scope.poster = $scope.posterMovie;
        }

        if(!$scope.movieTrailer){
            $scope.trailer = $sce.trustAsResourceUrl('https://www.youtube.com/embed/bE4835fXxb8');
        }else{
            $scope.trailer = $sce.trustAsResourceUrl($scope.movieTrailer);
        }
        var a = '2017/2/11';
        $scope.startDate = new Date(a);
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
    $scope.setPoster = function () {
        if(!$scope.posterMovie){
            $scope.poster= 'img/cinema.png';
        }else{
            $scope.poster = $scope.posterMovie;
        }
    };
    $scope.clear = function (boolean) {
        if(boolean == true){
            $scope.posterMovie = '';
        }else{
            $scope.movieTrailer = '';
        }
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