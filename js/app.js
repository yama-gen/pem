'use strict';

var app = angular.module('app', ['ngResource', 'ui.router','ngMaterial']);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // IEのAJAXリクエストキャッシュを無効化
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.common['Pragma'] = 'no-cache';
    $httpProvider.defaults.headers.common['Expires'] = 0;
  
    // インターセプタをプッシュ
    //$httpProvider.interceptors.push('ResponseErrorInterceptor');
  
    // 初期表示時、すべての郵便物ボックスを一覧表示する。
    //$urlRouterProvider.otherwise("/boxTree");
    // $stateProvider
    //   .state("boxTree", {
    //     url: "/boxTree",
    //     views: {
    //       "leftView": {
    //         templateUrl: "/tpl/letter-pc/boxTree.tpl.html",
    //         controller: "SearchBoxTreeController",
    //         resolve: {
    //           boxes: function(PlBox){
    //             return PlBox.get({target: 'boxTree'}).$promise;
    //           }
    //         }
    //       },
    //       "ctrlView": {
    //         templateUrl: "/tpl/letter-pc/mailListCtrl.tpl.html",
    //         controller: "SearchMailListCtrlController"
    //       },
    //       "centerView": {
    //         templateUrl: "/tpl/letter-pc/mailList.tpl.html",
    //         controller: "SearchMailListByBoxController",
    //         resolve: {
    //           mails: function(DgtPstFileItm, SearchConditionModel){
    //             return DgtPstFileItm.get({boxId: 'allMail', pageNumber: '1', sortId: SearchConditionModel.sortId}).$promise;
    //           }
    //         }
    //       }
    //     }
    //   });
}]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);