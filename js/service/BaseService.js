/**
 * Created by Van on 19/01/2017.
 */

    SWDApp.service('BaseService', ["$http", function ($http) {


        this.getAPI = function (url, param, cbSuccess, cbError) {
            var deferred = $q.defer();
            self.waitForCore().then(function () {
                $http({
                    method: 'GET',
                    url: url,
                    params: param
                })
                    .success(function (data) {
                        cbSuccess(data);
                    })
                    .error(function (data, status, json) {
                        cbError(data, status, json);
                    });
            });
            return deferred.promise;
        };

        this.postAPI = function (url, inputData, cbSuccess, cbError) {
            var deferred = $q.defer();
            self.waitForCore().then(function () {
                $http({
                    method: 'POST',
                    url: url,
                    data: inputData,
                    dataType: 'json'
                })
                    .success(function (data) {
                        cbSuccess(data);
                    })
                    .error(function (data, status, json) {
                        cbError(data, status, json);
                    });
            });
            return deferred.promise;
        };


    }]);
