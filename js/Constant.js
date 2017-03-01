var HTTP = 'http://';
var SERVER_IP = 'localhost';
var SERVER_PORT = ':8080';
var SERVER_PATH= '/cm';

// API
var URL_LOGIN = HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/account/login";
var URL_MOVIE_SOON= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/comingSoon";
var URL_MOVIE_NOW= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/moviePresenting";
var URL_GET_SHOWTIME= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/schedule/getShowtime";
var URL_GET_ALL_MOVIE= HTTP + SERVER_IP + SERVER_PORT + SERVER_PATH + "/movie/allmovie";


var LANG_EN = 1;
var LANG_VI= 0;
var SCREEN_MOVIE = 1;
var SCREEN_SHOWTIME = 2;
var SCREEN_SALE= 3;
var SCREEN_ADMIN = 4;
var SCREEN_THEATER = 5;

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
var LOCAL_ALL_MOVIES = 'ALL_MOVIE_LIST';

// Page
var ADMIN_PAGE = 'adminPage';
var ADD_MOVIE_PAGE = 'addMovie';
var HOME_PAGE = 'homePage';


