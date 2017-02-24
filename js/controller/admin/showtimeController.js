SWDApp.controller('showtimeController', function($scope,$controller,$mdDialog,$translate,BaseService) {
    $controller('BaseController', {$scope: $scope});

    initController();

    function initController(){
        initData();
        initView();
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

    function initData() {
        var data={
            'movieID': '3'
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
        var chieu = new Date('2017-02-24');
        var het = new Date('2017-03-24');
        $scope.startDate = new Date();
        $scope.startMaxDate = new Date(
            $scope.startDate.getFullYear(), het.getMonth(), het.getDate()
        );
        $scope.startMinDate = new Date(
            $scope.startDate.getFullYear(), $scope.startDate.getMonth(), chieu.getDate()+1
        );
    }

    $scope.close = function () {
        $mdDialog.cancel();
    };

});