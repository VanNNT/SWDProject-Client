SWDApp.directive('navDropdown', function ($parse, $document) {
    return {
        restrict: 'A',
        link: function (scope) {
            $document.bind('click', clickOutsideHandler);
            function clickOutsideHandler() {
                var opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
                if (opened === true) {
                    $(".navbar .navbar-collapse").removeClass("in");
                    scope.navCollapsed = false;
                }
            }
        }
    };
});