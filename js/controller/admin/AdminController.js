/**
 * Created by Van on 02/02/2017.
 */
SWDApp.controller('AdminController', function($scope,$controller,$mdMedia,$mdDialog,$rootScope) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
    }

    function initData(){
        $rootScope.prePage = $rootScope.currentPage;
        $rootScope.currentPage = ADMIN_PAGE;
    }
    $scope.popupInfo = function (ev) {
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: 'updateInfoController',
            templateUrl: 'view/admin/updateInfo.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };
});