SWDApp.controller('ShowtimeController', function($scope,$controller,$translate,BaseService,$rootScope,$filter) {
    $controller('BaseController', {$scope: $scope});

    var data;
    initController();

    function initController(){
        initData();
        initView();
    }

    function initData() {
        console.log($scope.itemTime);
        $scope.movieTitle = $scope.itemTime.movieName;
        data={
            'movieID': $scope.itemTime.movieId
        };
        BaseService.postAPI(URL_GET_SHOWTIME,data,getScheduleSuccess, getScheduleFail);

        $scope.theatres = [
            { id: 1, name: 'CGV' },
            { id: 2, name: 'LOTTE' },
            { id: 3, name: 'GALAXY' },
            { id: 4, name: 'CINEBOX' },
            { id: 5, name: 'BHD' }
        ];

        $scope.rooms = [
            { id: 1, name: 'ROOM 1' },
            { id: 2, name: 'ROOM 2' },
            { id: 3, name: 'ROOM 3' },
            { id: 4, name: 'ROOM 4' },
            { id: 5, name: 'ROOM 5' }
        ];
    }

    function initView(){
        var chieu = new Date($scope.itemTime.startDate);
        var het = new Date($scope.itemTime.endDate);
        $scope.startDate = new Date();
        $scope.startMaxDate = new Date(
            $scope.startDate.getFullYear(), het.getMonth(), het.getDate()
        );
        if(chieu > $scope.startDate){
            $scope.startMinDate = new Date(
                chieu.getFullYear(), chieu.getMonth(), chieu.getDate()+1
            );
        }else{
            $scope.startMinDate = new Date(
                $scope.startDate.getFullYear(), $scope.startDate.getMonth(), $scope.startDate.getDate()+1
            );
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
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }


    $scope.close = function () {
        $rootScope.isShow = false;
    };

    function saveSuccess(response) {
        if(!response.data.errorCode) {
            BaseService.postAPI(URL_GET_SHOWTIME,data,getScheduleSuccess, getScheduleFail);
            $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.createSchedule'));
            $scope.movieTheatre = '';
            $scope.movieTime ='';
            $scope.movieRoom = '';
            $scope.startDate = new Date();
            $scope.infoForm.$setUntouched();
        }else{
            $scope.showAlert('', $translate.instant('message.error'),$translate.instant('errors.' + response.data.errorCode));
        }
    }

    function saveFail() {
        $scope.showAlert('', $translate.instant('message.error'), $translate.instant('message.connect'));
    }
    $scope.saveSchedule = function () {
        var data = {
            'movieId': $scope.itemTime.movieId,
            'theatre': $scope.movieTheatre,
            'startDate': $scope.startDate.toISOString().substr(0, 10),
            'startTime': $scope.movieTime,
            'room': $scope.movieRoom
        };
       BaseService.postAPI(URL_CREATE_SHOWTIME,data,saveSuccess,saveFail);
    };

    var itemDelete = '';
    $scope.delete = function (item) {
        $scope.movieTheatre = item.theatre;
        $scope.movieTime = item.startTime;
        $scope.movieRoom = item.room;
        $scope.startDate = new Date(item.startDate);
        $scope.showConfirm('',$translate.instant('message.confirm'),$translate.instant('message.confirmDelete'),
            // OK
            function () {
                itemDelete = item;
            var data = {
                'scheduleId': item.scheduleId
            };
            BaseService.postAPI(URL_DELETE_SHOWTIME,data,deleteSuccess,saveFail);
        }, function () {})
    };

    function deleteSuccess(response){
        if(response.data.theatre == CGV){
            _.any($scope.listCGV,function (i) {
                if(i.scheduleId == response.data.scheduleId){
                    $scope.listCGV.splice($scope.listCGV.indexOf(i),1);
                }
            })
        }else if (response.data.theatre == LOTTE){
            _.any($scope.listLotte,function (i) {
                if(i.scheduleId == response.data.scheduleId){
                    $scope.listLotte.splice($scope.listLotte.indexOf(i),1);
                }
            })
        }else if(response.data.theatre == GALAXY){
            $scope.listGalaxy.splice($scope.listGalaxy.indexOf(item),1);
            _.any($scope.listGalaxy,function (i) {
                if(i.scheduleId == response.data.scheduleId){
                    $scope.listGalaxy.splice($scope.listGalaxy.indexOf(i),1);
                }
            })
        }else if(response.data.theatre == BHD){
            _.any($scope.listBHD,function (i) {
                if(i.scheduleId == response.data.scheduleId){
                    $scope.listBHD.splice($scope.listBHD.indexOf(i),1);
                }
            })
        }else if(response.data.theatre == CINEBOX){
            _.any($scope.listCinebox,function (i) {
                if(i.scheduleId == response.data.scheduleId){
                    $scope.listCinebox.splice($scope.listCinebox.indexOf(i),1);
                }
            })
        }
        $scope.showAlert('', $translate.instant('message.success'), $translate.instant('message.deleteSuccess'));

    }
    $scope.$on("$destroy", function() {
        delete $rootScope.itemTime;
        delete $rootScope.isShow;
    });

});