/**
 * Created by VanNNT on 2/28/2017.
 */
SWDApp.filter('formatTime', function ($filter) {
        return function (time) {
            var d = moment(time,'HH:mm:ss');
            if(d.isValid()){
                var parts = time.split(':');
                var date = new Date(0, 0, 0, parts[0], parts[1], parts[2]);
                return $filter('date')(date, 'HH:mm');
            }else{
                return $filter('date')(time, 'HH:mm');
            }
        };
});