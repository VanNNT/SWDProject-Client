/**
 * Created by Van on 06/01/2017.
 */
SWDApp.controller('HomeController', function($scope, $mdDialog, $mdMedia,$translate,$rootScope) {

    $rootScope.view = 0;
    $rootScope.selectIndex=0;
    $scope.lang = LANG_EN;
    $scope.showLoginFrom = function (ev) {
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show({
            controller: 'LoginController',
            templateUrl: 'view/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then();
    };

    $scope.listFilm = [
        {
            id: 0,
            photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
            title: 'THOR',
            des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
            'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
            'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
        },
        {
            id:1,
            photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
            title: 'TWILIGHTggggggggggggggggggggggggggggggggggg',
            des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
            'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
            'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
        },
        {
            id:1,
            photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
            title: 'THOR',
            des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
            'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
            'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
        },
        {
            id:1,
            photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
            title: 'TWILIGHT',
            des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
            'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
            'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
        },
        {
            id:1,
            photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
            title: 'THOR',
            des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
            'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
            'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
        },
        {
            id:1,
            photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
            title: 'TWILIGHT',
            des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
            'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
            'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
        }

    ];

    $scope.changeLanguage = function (key) {
        $translate.use(key);
        if(key=='en'){
            $scope.lang = LANG_EN;
        }else{
            $scope.lang = LANG_VI;
        }
    };

    $scope.go = function (value) {
        if(value ==1){
            $rootScope.selectIndex=1;
        }else{
            $rootScope.selectIndex=0;
        }

    }
});