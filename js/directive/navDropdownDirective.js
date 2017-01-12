SWDApp.directive('navDropdown', function ($parse, $document) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $document.bind('click', clickOutsideHandler);
            function clickOutsideHandler(event) {
                var opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
                if (opened === true) {
                    // $("button.navbar-toggle").click();
                    $(".navbar .navbar-collapse").removeClass("in");
                    scope.navCollapsed = false;
                }
            }
        }
    };
});