var HTTP = 'http://';
var SERVER_IP = 'localhost';
var SERVER_PORT = ':8080';
var SERVER_PATH= '/cm';

// API
var URL_LOGIN = HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/account/login";
var URL_MOVIE_SOON= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/comingSoon";
var URL_MOVIE_NOW= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/moviePresenting";
var URL_DELETE_MOVIE= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/changeMovieState";
var URL_UPDATE_MOVIE= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/updateMovieInfo";
var URL_CREATE_MOVIE= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/updateMovieInfo";
var URL_GET_SHOWTIME= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/schedule/getShowtime";
var URL_CREATE_SHOWTIME= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/schedule/create-schedule";
var URL_DELETE_SHOWTIME= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/schedule/changeScheduleState";
var URL_ALL_MOVIE= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/getAllMovie";
var URL_GET_SEAT = HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/getSeat";
var URL_SAVE_TICKET = HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/bookTicket";


var LANG_EN = 1;
var LANG_VI= 0;
var SCREEN_MOVIE = 1;
var SCREEN_SALE= 3;
var SCREEN_ADMIN = 4;

var GALAXY = "3";
var CGV = "1";
var LOTTE = "2";
var CINEBOX = "4";
var BHD = "5";
var NOW_SHOWING = 0;
var COMING_SOON = 1;

// localStorage
var LOCAL_USER_INFO = 'USER_INFO';
var LOCAL_MOVIE_SOON = 'MOVIE_SOON_LIST';
var LOCAL_MOVIE_NOW = 'MOVIE_NOW_LIST';
var LOCAL_SELECT_INDEX = 'SELECT_INDEX';
var LOCAL_MOVIE_SHEDULE = 'MOVIE_SHEDULE';
var LOCAL_MOVIE_NAME = 'MOVIE_NAME';

// Page
var ADMIN_PAGE = 'adminPage';
var ADD_MOVIE_PAGE = 'addMovie';
var HOME_PAGE = 'homePage';

var ROLE_ADMIN = 'admin';
var ROLE_USER = 'user';


