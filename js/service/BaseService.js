/**
 * Created by Van on 19/01/2017.
 */

    SWDApp.service('BaseService',  function ($http) {

        var self = this;

        this.getAPI = function (url, param, cbSuccess, cbError) {
            $http({
                method: 'GET',
                url: url,
                params: param
            }).then(function (data,header) {
                cbSuccess(data,header);
            }, function (data,header) {
                cbError(data,header);
            });
        };

        this.postAPI = function (url, inputData, cbSuccess, cbError) {
            var headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
             };
            $http({
                method: 'POST',
                headers: headers,
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                url: url,
                data: inputData,
                dataType: 'json'
            }).then(function (response,header) {
                cbSuccess(response,header);
            }, function (response,header) {
                cbError(response,header);
            });
        };
    });
