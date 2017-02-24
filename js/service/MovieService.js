/**
 * Created by Van on 19/01/2017.
 */
SWDApp.service('MovieService', function(BaseService) {
        var movie = [];
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

});
