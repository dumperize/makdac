'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ListCtrl', function () {
    var userID = '3';
    var orderList = [
      {
        orderID: "56",
        dishes: "1,5,8",
        userID: 4,
        totalTimeout: 4000,
        status: 1
      },
      {
        orderID: "57",
        dishes: "4,3,9",
        userID: 4,
        totalTimeout: 18000,
        status: 1
      },
      {
        orderID: "58",
        dishes: "2,3",
        userID: 3,
        totalTimeout: 16000,
        status: 2
      },
      {
        orderID: "59",
        dishes: "2,3",
        userID: 3,
        totalTimeout: 8000,
        status: 1
      }
    ];
    this.orderListDone = orderList.filter(function(item){
      item.isCurrentUser = item.userID == userID ? true : false;
      return item.status == 2;
    });

    this.orderListDur = orderList.filter(function(item){
      item.isCurrentUser = item.userID == userID ? true : false;
      return item.status == 1;
    });

    this.deleteOrder = function(index){
      // $http.post("#", answer).success(function (answ) {
      //       this.response=answ;
      // }
      this.orderListDone.splice(index,1);
    }
  });
