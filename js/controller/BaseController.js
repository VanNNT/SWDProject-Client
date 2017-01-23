SWDApp.controller('BaseController', function($scope, $mdDialog) {

    $scope.customFullscreen = false;

    $scope.showAlert = function(ev,title,content) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(title)
                .textContent(content)
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')
                .targetEvent(ev)
        );
    };

    $scope.showConfirm = function(ev,title,content,ok,cancel) {
        var confirm = $mdDialog.confirm()
            .title(title)
            .textContent(content)
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('OK')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
           ok();
        }, function() {
           cancel();
        });
    };

});
