/**
 * Created by Van on 02/02/2017.
 */
SWDApp.controller('AdminController', function($scope,$mdDialog,$mdMedia,$rootScope,$controller,$location) {

    $controller('BaseController', {$scope: $scope});

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.view = SCREEN_ADMIN;
    }

    function initData() {
        $rootScope.prePage = $rootScope.currentPage;
        $rootScope.currentPage = ADMIN_PAGE;
        //$scope.listFilm = JSON.parse(localStorage.getItem(LOCAL_MOVIE_SOON));
        $scope.listFilm = [
            {
                id: 0,
                photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
                title: 'THOR',
                actor: 'aa,ss,cc',
                type: 'AAA,CCC,YYY',
                date: '18.01.2017 - 02.02.2017',
                time: '92 minite',
                trailer: 'https://www.youtube.com/embed/bE4835fXxb8',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
                title: 'TWILIGHTggggggggggggg',
                actor: 'aa,ss,cc',
                type: 'AAA,CCC,YYY',
                date: '18.01.2017 - 02.02.2017',
                time: '92 minite',
                trailer: 'https://www.youtube.com/embed/bE4835fXxb8',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
                title: 'THOR',
                actor: 'aa,ss,cc',
                type: 'AAA,CCC,YYY',
                date: '18.01.2017 - 02.02.2017',
                time: '92 minite',
                trailer: 'https://www.youtube.com/embed/bE4835fXxb8',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
                title: 'TWILIGHT',
                actor: 'aa,ss,cc',
                type: 'AAA,CCC,YYY',
                date: '18.01.2017 - 02.02.2017',
                time: '92 minite',
                trailer: 'https://www.youtube.com/embed/bE4835fXxb8',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
                title: 'THOR',
                actor: 'aa,ss,cc',
                type: 'AAA,CCC,YYY',
                date: '18.01.2017 - 02.02.2017',
                time: '92 minite',
                trailer: 'https://www.youtube.com/embed/bE4835fXxb8',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
                title: 'TWILIGHT',
                actor: 'aa,ss,cc',
                type: 'AAA,CCC,YYY',
                date: '18.01.2017 - 02.02.2017',
                time: '92 minite',
                trailer: 'https://www.youtube.com/embed/bE4835fXxb8',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            }

        ];
    }

    $scope.showPageInfo = function(){
        $location.path('/add-movie');
    };
    $scope.showTime = function (ev,item) {
        $rootScope.itemTime = item;
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: 'showtimeController',
            templateUrl: 'view/admin/showtimeInfo.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };
    // SortData

    $scope.sortColumn = 'name';
    $scope.reverse = false;

    $scope.sortData = function(column){
        if($scope.sortColumn == column)
            $scope.reverse = !$scope.reverse;
        else
            $scope.reverse = false;
        $scope.sortColumn = column;
    };
    $scope.getSortClass = function (column) {
        if($scope.sortColumn == column){
            return $scope.reverse ? 'arrow-up':'arrow-down'
        }
        return '';
    };


});