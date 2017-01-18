/**
 * Created by Van on 06/01/2017.
 */
SWDApp.config(function($routeProvider,$translateProvider) {
    $routeProvider


    // route for the home page
        .when('/', {
            templateUrl : 'view/home.html',
            controller  : 'HomeController'
        })
        .when('/about', {
            templateUrl : 'view/about.html',
            controller  : 'AboutController'
        })
        .when('/movies', {
            templateUrl : 'view/movie.html',
            controller  : 'MovieController'
        })
        .when('/sale-service',{
            templateUrl : 'view/sale-service.html',
            controller  : 'SaleController'
        })
        .otherwise({
            redirectTo: '/'
        });

    function getJSON (url) {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': url,
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    }

    var vi = getJSON('js/lang/locale-vi.json');
    var en = getJSON('js/lang/locale-en.json');

    $translateProvider.translations('en', en);
    $translateProvider.translations('vi', vi);

    $translateProvider.preferredLanguage('en');
});

SWDApp.controller('AboutController', function($scope,$mdDialog) {
   $scope.message = 'ffsdfsfsdfsdfsdfsdfsd';
});