/**
 * Created by Van on 14/01/2017.
 */

SWDApp.controller('SaleController', function ($scope, $translate, $rootScope) {

    initController();
    function initController() {
        initView();
        initData();
    }

    function initView() {
        $rootScope.view = SCREEN_SALE;
    }

    function initData() {
        $scope.listSale = [
            {
                id: 0,
                photo: 'https://www.galaxycine.vn/media/files/upload/promotion/sale_n_service/ticket_voucher.jpg',
                title: $translate.instant('sale.ticketVoucher')
            },
            {
                id: 1,
                photo: 'img/stock-photo.jpg',
                title: $translate.instant('sale.typeTicket')
            },

            {
                id: 2,
                photo: 'https://www.galaxycine.vn/media/files/upload/promotion/Giftvoucher(2).jpg',
                title: $translate.instant('sale.gift')
            },
            {
                id: 3,
                photo: 'https://www.galaxycine.vn/media/files/upload/promotion/sale_n_service/phong_hoi_nghi_200.jpg',
                title: $translate.instant('sale.room')
            },

            {
                id: 4,
                photo: 'https://www.galaxycine.vn/media/files/upload/promotion/sale_n_service/dvqc.jpg',
                title: $translate.instant('sale.promotion')
            }
        ];
    }
});