/**
 * Created by Van on 03/02/2017.
 */
SWDApp.controller('BookTicketController', function($scope,$controller,$rootScope,BaseService,$translate) {
    $controller('BaseController', {$scope: $scope});


    var listSeatBook = [];
    var listSeat =[];
    $scope.amountOfTicket = 0;
    $scope.totalPrice=0;
    initController();

    function initController(){
        initData();
    }

    function initData() {
        if($rootScope.bookTicketOfMovie && $rootScope.bookMovieName){
            localStorage.setItem(LOCAL_MOVIE_SHEDULE,JSON.stringify($rootScope.bookTicketOfMovie));
            localStorage.setItem(LOCAL_MOVIE_NAME,JSON.stringify($rootScope.bookMovieName));
        }
        var item = JSON.parse(localStorage.getItem(LOCAL_MOVIE_SHEDULE));
        $scope.movieTitle = JSON.parse(localStorage.getItem(LOCAL_MOVIE_NAME));
        var data={
            'scheduleId': item.scheduleId
        };
        BaseService.getAPI(URL_GET_SEAT,data,getSeatSuccess,getSeatFail);
        if(item.theatre == CGV){
            $scope.theatre = 'CGV'
        }else if(item.theatre == GALAXY){
            $scope.theatre= 'GALAXY'
        }else if(item.theatre == BHD){
            $scope.theatre = 'BHD'
        }else if(item.theatre == CINEBOX){
            $scope.theatre = 'CINEBOX'
        }else {
            $scope.theatre = 'LOTTE'
        }
        $scope.startDate = item.startDate;
        $scope.startTime = item.startTime;
        $scope.room = 'ROOM' + item.room;

        $scope.seatRow = [
            {id: 'A'},
            {id: 'B'},
            {id: 'C'},
            {id: 'D'},
            {id: 'E'}
        ];

    }

    function getSeatSuccess(response){
        $scope.listSeat = response.data;
    }

    function getSeatFail(){
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }

    $scope.addSeat = function (seat) {
        if(!seat.seatStatus){
            var isExist = false;
            var index = 0;
            // check seat in list seatBook
            _.any(listSeatBook,function (i) {
                if(i == seat.seatId){
                    isExist = true;
                    listSeatBook.splice(index,1);
                    listSeat.splice(index,1);
                    $scope.amountOfTicket= $scope.amountOfTicket -1;
                    return true;
                }
                index = index +1;
            });
            if(!isExist){
                listSeatBook.push(seat.seatId);
                listSeat.push(seat);
                $scope.amountOfTicket= $scope.amountOfTicket +1;
            }

            $scope.totalPrice = $scope.amountOfTicket*50.000;
        }
    };
    
    $scope.bookTicket = function () {
        _.any(listSeatBook,function (i) {
            _.any(listSeatBook,function (j) {
                 if(i - j > 1 || j-i > 1){
                     $scope.a = !$scope.a;
                     $scope.showAlert('','','Vui lòng không để trống ghế bên cạnh');
                     return true;
                 }
            });
            return true;
        });

        if($scope.a){
             var data ={
                 'username': $scope.nameOfUser,
                 'phone': $scope.phoneOfUser,
                 'price': $scope.totalPrice,
                 'seatId': listSeatBook ,
                 'userId': $rootScope.globals.currentUser.userID
             };
             BaseService.postAPI(URL_SAVE_TICKET,data,saveTicketSuccess,saveTicketError)
        }
    };

    function saveTicketSuccess(response){
        if(!response.data.errorCode){
            $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.bookTicket'));
            _.any(listSeat,function (i) {
                     i.seatStatus = true;
            });
            listSeatBook = [];
            listSeat = [];
            $scope.amountOfTicket = 0;
            $scope.totalPrice=0;
            $scope.a = false;
            $scope.nameOfUser = '';
            $scope.phoneOfUser = '';
            $scope.totalPrice = '';
            $scope.seatForm.$setUntouched();
        }else{
            $scope.showAlert('', $translate.instant('message.error'),$translate.instant('errors.' + response.data.errorCode));
        }
    }

    function saveTicketError() {
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }
    $scope.$on("$destroy", function() {
        delete  $rootScope.bookTicketOfMovie;
        delete  $rootScope.titleMovieB;
        localStorage.removeItem(LOCAL_MOVIE_NAME);
        localStorage.removeItem(LOCAL_MOVIE_SHEDULE);
    });
});