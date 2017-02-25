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
        $scope.seatRow = [
            {id: 'A'},
            {id: 'B'},
            {id: 'C'},
            {id: 'D'},
            {id: 'E'}
        ];
       $scope.listSeat = [
           {
               name: 'A1'
           },
           {
               name: 'A2'
           },
           {
               name: 'A3'
           },
           {
               name: 'A4'
           },
           {
               name: 'A5'
           },
           {
               name: 'A6'
           },
           {
               name: 'A7'
           },
           {
               name: 'A8'
           },
           {
               name: 'A9'
           },
           {
               name: 'A10'
           },
           {
               name: 'B1'
           },
           {
               name: 'B2'
           },
           {
               name: 'B3'
           },
           {
               name: 'B4'
           },
           {
               name: 'B5'
           },
           {
               name: 'B6'
           },
           {
               name: 'B7'
           },
           {
               name: 'B8'
           },
           {
               name: 'B9'
           },
           {
               name: 'B10'
           },
           {
               name: 'C1'
           },
           {
               name: 'C2'
           },
           {
               name: 'C3'
           },
           {
               name: 'C4'
           },
           {
               name: 'C5'
           },
           {
               name: 'C6'
           },
           {
               name: 'C7'
           },
           {
               name: 'C8'
           },
           {
               name: 'C9'
           },
           {
               name: 'C10'
           },
           {
               name: 'B1'
           },
           {
               name: 'B2'
           },
           {
               name: 'B3'
           },
           {
               name: 'B4'
           },
           {
               name: 'B5'
           },
           {
               name: 'B6'
           },
           {
               name: 'B7'
           },
           {
               name: 'B8'
           },
           {
               name: 'B9'
           },
           {
               name: 'B10'
           },
           {
               name: 'C1'
           },
           {
               name: 'C2'
           },
           {
               name: 'C3'
           },
           {
               name: 'C4'
           },
           {
               name: 'C5'
           },
           {
               name: 'C6'
           },
           {
               name: 'C7'
           },
           {
               name: 'C8'
           },
           {
               name: 'C9'
           },
           {
               name: 'C10'
           }
       ];
    }
});