/**
 * Created by Van on 07/02/2017.
 */
SWDApp.controller('UpdateInfoController', function($scope,$mdDialog,$controller,$sce,$rootScope,$translate,BaseService) {
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
             $scope.title = $scope.itemMovie.movieName;
             $scope.nameMovie = $scope.itemMovie.movieName;
             $scope.posterMovie = $scope.itemMovie.picture;
             $scope.movieGenre = $scope.itemMovie.genre;
             $scope.desMovie = $scope.itemMovie.introduction;
             $scope.startDate = new Date($scope.itemMovie.startDate);
             $scope.endDate = new Date($scope.itemMovie.endDate);
             $scope.movieActor = $scope.itemMovie.actor;
             $scope.movieTime = $scope.itemMovie.lenght;
             $scope.movieTrailer = $scope.itemMovie.trailer;
             $scope.trailer = $sce.trustAsResourceUrl($scope.itemMovie.trailer);

         }
    }

    function initView(){
        if($scope.itemMovie && new Date($scope.itemMovie.startDate) < new Date()){
            $scope.disabled = true;
        }
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

    $scope.addMovie = function () {
        //create
        if(!$scope.itemMovie){
            var data = {
                'userId': $rootScope.globals.currentUser.userID,
                'movieName': $scope.nameMovie,
                'introduction':  $scope.desMovie,
                'actor': $scope.movieActor,
                'genre': $scope.movieGenre,
                'startDate': $scope.startDate.toISOString().substr(0, 10),
                'endDate': $scope.endDate.toISOString().substr(0, 10),
                'trailer': $scope.movieTrailer,
                'picture': $scope.posterMovie,
                'lenght': $scope.movieTime
            };
            BaseService.postAPI(URL_CREATE_MOVIE,data,createMovieSuccess,updateMovieFail);
        }else{
            //update
            var data = {
                'movieID': $scope.itemMovie.movieId ,
                'movieName': $scope.nameMovie,
                'introduction':  $scope.desMovie,
                'actor': $scope.movieActor,
                'genre': $scope.movieGenre,
                'startDate': $scope.startDate.toISOString().substr(0, 10),
                'endDate': $scope.endDate.toISOString().substr(0, 10),
                'trailer': $scope.movieTrailer,
                'picture': $scope.posterMovie,
                'lenght': $scope.movieTime
            };
            BaseService.postAPI(URL_UPDATE_MOVIE,data,updateMovieSuccess,updateMovieFail);
        }
    };
   
    function updateMovieSuccess(response) {
        if(!response.data.errorCode){
            $scope.newData = {
                'movieID': $scope.itemMovie.movieId ,
                'movieName': $scope.nameMovie,
                'introduction':  $scope.desMovie,
                'actor': $scope.movieActor,
                'genre': $scope.movieGenre,
                'startDate': $scope.startDate.toISOString().substr(0, 10),
                'endDate': $scope.endDate.toISOString().substr(0, 10),
                'trailer': $scope.movieTrailer,
                'picture': $scope.posterMovie,
                'lenght': $scope.movieTime
            };
            $scope.updateMovie($scope.newData);
            $rootScope.isShowInfo = false;
            $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.updateMovie'));
        }else{
            $scope.showAlert('', $translate.instant('message.error'),$translate.instant('errors.' + response.data.errorCode));
        }
    }
    
    function updateMovieFail() {
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }
    
    function createMovieSuccess(response) {
        if(!response.data.errorCode){
            $scope.createMovie(response);
            $rootScope.isShowInfo = false;
            $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.createMovie'));
        }else{
            $scope.showAlert('', $translate.instant('message.error'),$translate.instant('errors.' + response.data.errorCode));
        }
    }
    $scope.$on("$destroy", function() {
        delete  $rootScope.isShowInfo;
    });

});