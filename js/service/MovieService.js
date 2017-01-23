/**
 * Created by Van on 19/01/2017.
 */
SWDApp.service('MovieService', ["BaseService",
    function(BaseService) {
    var movie = [];
        this.getListFilm= function (data) {
            BaseService.postAPI(url, data, success, fail);
            //success
            success = function () {
            };
            //fail
            fail = function () {
            };
        };

        this.setItem = function(data){
            movie = data;
            localStorage.setItem('MOVIE_INFO',JSON.stringify(movie));
        };

        this.getItem = function(){
            if(movie.length==0){
                return JSON.parse(localStorage.getItem('MOVIE_INFO'));
            }else{
                return movie;
            }

        };

}]);
