SWDApp.controller('showtimeController', function($scope,$controller,$mdDialog) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
    }

    function initData() {
        $scope.a = 'Hello !!!';
    }

    $scope.close = function () {
        $mdDialog.cancel();
    };
});