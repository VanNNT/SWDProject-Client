/**
 * Created by Van on 10/01/2017.
 */
SWDApp.controller('MovieController', function($scope,$mdDialog,$rootScope) {

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.view = SCREEN_MOVIE;
        if (!$rootScope.selectIndex) {
            $rootScope.selectIndex = 0;
        }
    }

    function initData() {
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
                id: 1,
                photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
                title: 'TWILIGHTggggggggggggggggggggggggggggggggggg',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
                title: 'THOR',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
                title: 'TWILIGHT',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'http://moviemarker.co.uk/wp-content/uploads/2012/03/Thor-Film-Poster.jpg',
                title: 'THOR',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            },
            {
                id: 1,
                photo: 'https://rianna92.files.wordpress.com/2010/04/movie-posters-twilight-series-720496_600_900.jpg',
                title: 'TWILIGHT',
                des: 'Khi một phi thuyền bí ẩn đáp xuống trái đất, một biệt đội tinh anh dưới sự dẫn dắt của chuyên ' +
                'gia ngôn ngữ học kiệt xuất Louise Banks được đưa đến để điều tra. ' +
                'Louise và các đồng đội phải chạy đua với thời gian để tìm câu trả lời cho nhiều bí ẩn.'
            }

        ];
    }
});