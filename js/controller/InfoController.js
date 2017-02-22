SWDApp.controller('InfoController', function($scope,$rootScope, MovieService,$controller,$mdDialog,$mdMedia,$sce,BaseService) {

    $controller('BaseController', {$scope: $scope});


    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {

    }

    function getScheduleSuccess(response){
        $scope.listGalaxy = [];
         if(response.data){
             _.each(response.data, function(item){
                 if(item.theatre == "3")
                     $scope.listGalaxy.push(item);
             });
         }
         if($scope.listGalaxy){
             $scope.nameGalaxy = "Galaxy";
         }
    }

    function getScheduleFail(){

    }

    function initData() {
        $scope.item = MovieService.getItem();
        var data={
            'movieID': $scope.item.movieId
        };
        BaseService.postAPI(URL_GET_SHOWTIME,data,getScheduleSuccess, getScheduleFail);

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

    $scope.showPopup = function (name,ev) {
        $rootScope.titleMovie = name;
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: 'bookTicketController',
            templateUrl: 'view/bookTicket.html',
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