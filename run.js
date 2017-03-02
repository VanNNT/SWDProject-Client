SWDApp.run(function($rootScope, $location, $cookies, $http){
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        $rootScope.logged = true;
        $rootScope.role = $rootScope.globals.currentUser.role;
        $rootScope.nameUser = $rootScope.globals.currentUser.username;
    }

    $rootScope.$on('$locationChangeStart', function(){
        if(!$rootScope.logged && ($location.path() == '/admin'
            || $location.path() =='/book-ticket')){
            $location.path('/');
        }
    });
});