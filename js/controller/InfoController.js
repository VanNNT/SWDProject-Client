SWDApp.controller('InfoController', function($scope,$rootScope, MovieService,$controller,$mdDialog,$mdMedia,$sce,BaseService,$translate) {

    $controller('BaseController', {$scope: $scope});

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.view = '';
    }

    function initData() {
        $scope.item = MovieService.getItem();
        var data={
            'movieID': $scope.item.movieId
        };
        $scope.index = JSON.parse(localStorage.getItem(LOCAL_SELECT_INDEX));
        if($scope.index == NOW_SHOWING){
            BaseService.postAPI(URL_GET_SHOWTIME,data,getScheduleSuccess, getScheduleFail);
        }
    }

    function getScheduleSuccess(response) {
        $scope.listGalaxy = [];
        $scope.listCGV = [];
        $scope.listLotte = [];
        $scope.listCinebox = [];
        $scope.listBHD = [];
        $scope.nameGalaxy = '';
        $scope.nameCGV = '';
        $scope.nameLotte = '';
        $scope.nameCinebox = '';
        $scope.nameBHD = '';
        if (response.data) {
            _.each(response.data, function (item) {
                if (item.theatre == GALAXY) {
                    $scope.listGalaxy.push(item);
                } else if (item.theatre == CGV) {
                    $scope.listCGV.push(item);
                } else if (item.theatre == LOTTE) {
                    $scope.listLotte.push(item);
                } else if (item.theatre == CINEBOX) {
                    $scope.listCinebox.push(item);
                } else if (item.theatre == BHD) {
                    $scope.listBHD.push(item);
                }
            });
        }
        if ($scope.listGalaxy.length != 0) {
            $scope.nameGalaxy = "Galaxy";
        }
        if ($scope.listCGV.length != 0) {
            $scope.nameCGV = "CGV";
        }
        if ($scope.listLotte.length != 0) {
            $scope.nameLotte = "Lotte";
        }
        if ($scope.listCinebox.length != 0) {
            $scope.nameCinebox = "Cinebox";
        }
        if ($scope.listBHD.length != 0) {
            $scope.nameBHD = "BHD";
        }
    }

    function getScheduleFail(){
        scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }

    $scope.showTrailer = function(trailer,name,ev){
        $rootScope.titleTrailer = name;
        $rootScope.videoTrailer = $sce.trustAsResourceUrl(trailer);
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: '',
            templateUrl: 'view/trailer.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };

    $rootScope.closePopUp = function () {
        $mdDialog.cancel();
    };

    $scope.$on("$destroy", function() {
        delete $rootScope.titleTrailer;
        delete $rootScope.videoTrailer;
        delete  $rootScope.titleMovie;
        delete $rootScope.closePopUp;
    });
});