var HTTP = 'http://';
var SERVER_IP = '192.168.11.92';
var SERVER_PORT = ':8080';
var SERVER_PATH= '/cm';

// API
var URL_LOGIN = HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/account/login";
var URL_MOVIE_SOON= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/comingSoon";
var URL_MOVIE_NOW= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/moviePresenting";
var URL_GET_SHOWTIME= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/schedule/getShowtime";


var LANG_EN = 1;
var LANG_VI= 0;
var SCREEN_MOVIE = 1;
var SCREEN_SHOWTIME = 2;
var SCREEN_SALE= 3;
var SCREEN_CONTACT = 4;
var SCREEN_THEATER = 5;


// localStorage
var LOCAL_USER_INFO = 'USER_INFO';
var LOCAL_MOVIE_SOON = 'MOVIE_SOON_LIST';
var LOCAL_MOVIE_NOW = 'MOVIE_NOW_LIST';

// Page
var ADMIN_PAGE = 'adminPage';
var HOME_PAGE = 'homePage';


