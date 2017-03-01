/**
 * Created by Van on 03/02/2017.
 */
SWDApp.controller('bookTicketController', function($scope,$controller,$rootScope) {
    $controller('BaseController', {$scope: $scope});


    var listSeatBook = [];
    $scope.amountOfTicket = 0;
    $scope.totalPrice=0;
    initController();

    function initController(){
        initData();
    }

    function initData() {
        if($rootScope.bookTicketOfMovie && $rootScope.titleMovieB){
            localStorage.setItem(LOCAL_MOVIE_SHEDULE,JSON.stringify($rootScope.bookTicketOfMovie));
            localStorage.setItem(LOCAL_MOVIE_NAME,JSON.stringify($rootScope.titleMovieB));
        }
        var item = JSON.parse(localStorage.getItem(LOCAL_MOVIE_SHEDULE));
        $scope.movieTitle =JSON.parse(localStorage.getItem(LOCAL_MOVIE_NAME));
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

        $scope.seatRow = [
            {id: 'A'},
            {id: 'B'},
            {id: 'C'},
            {id: 'D'},
            {id: 'E'}
        ];

       var list = item.seats;
       list.sort(function(a,b){
           if(a.seatId<b.seatId)
               return -1;
           if(a.seatId>b.seatId)
               return 1;
           return 0;
       });
        $scope.listSeat = list
    }

    $scope.addSeat = function (seat) {
        var isExist = false;
        // check seat in list seatBook
        _.any(listSeatBook,function (i) {
            if(i == seat.seatId){
                isExist = true;
                return true;
            }
        });
        if(isExist){
            listSeatBook.splice(seat.seatId,1);
            $scope.amountOfTicket= $scope.amountOfTicket -1;
        }else{
            listSeatBook.push(seat.seatId);
            $scope.amountOfTicket= $scope.amountOfTicket +1;
        }

        $scope.totalPrice = $scope.amountOfTicket*50.000;
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
    };

    $scope.$on("$destroy", function() {
        delete  $rootScope.bookTicketOfMovie;
        delete  $rootScope.titleMovieB;
        localStorage.removeItem(LOCAL_MOVIE_NAME);
        localStorage.removeItem(LOCAL_MOVIE_SHEDULE);
    });
});