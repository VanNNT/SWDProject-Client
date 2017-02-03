/**
 * Created by Van on 03/02/2017.
 */
SWDApp.controller('bookTicketController', function($scope,$controller) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
    }

    function initData() {
        $scope.a = 'Hello !!!';
        //create list 30 seat here
    }
});