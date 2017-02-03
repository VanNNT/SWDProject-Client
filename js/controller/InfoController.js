SWDApp.controller('InfoController', function($scope,$rootScope, MovieService,$controller,$mdDialog,$mdMedia,$sce) {

    $controller('BaseController', {$scope: $scope});


    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {

    }

    function initData() {
        $scope.item = MovieService.getItem();
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