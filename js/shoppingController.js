var myApp = angular.module("shoppingApp", []);
myApp.controller("shoppingController", [
  "$scope",
  "$http",
  "$interval",
  function ($scope, $http, $interval) {
    //Buttons Settings
    $scope.showTable = false;
    $scope.update = false;
    $scope.submit = true;
    $scope.cancel = false;
    $scope.userId = true;

    $scope.getUser = function () {
      $http({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      }).then(
        function successCallback(response) {
          $scope.showTable = true;
          $scope.users = response.data;
          var myArr = [];
          angular.forEach($scope.users, function (value, index) {
            myArr.push(value.name);
          });
          if (myArr.length > 0) {
            $scope.the_list = myArr.toString();
          }
        },
        function errorCallback(response) {
          alert("try again");
        },
      );
    };
    $scope.createUser = function () {
      $http({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/users",
        data: $scope.user,
      }).then(
        function successCallback(response) {
          if (!$scope.user) {
            console.log("no users found");
            return;
          }
          $scope.users.push(response.data);
          alert("new user created successfully.");
        },
        function errorCallback() {
          alert("data cannot submit");
        },
      );
    };
    $scope.updateUser = function () {
      $http({
        method: "PUT",
        url: "https://jsonplaceholder.typicode.com/users/" + $scope.user.id,
        data: $scope.user,
      }).then(
        function successCallback(response) {
          console.log("user updated");
          $scope.user.name = "";
        },
        function errorCallback(response) {
          alert("data not submitted");
        },
      );
    };
    $scope.deleteUser = function (user) {
      $http({
        method: "DELETE",
        url: "https://jsonplaceholder.typicode.com/users/" + user.id,
        data: $scope.user,
      }).then(
        function successCallback(response) {
          var index = $scope.users.indexOf(user);
          $scope.users.splice(index, 1);
        },
        function errorCallback(response) {
          alert("data not submitted");
        },
      );
    };

    $scope.editUser = function (user) {
      $scope.user = user;
      $scope.showTable = true;
      $scope.update = true;
      $scope.submit = false;
      $scope.cancel = true;
      $scope.userId = false;
    };
    $scope.cancelUser = function () {
      $scope.showTable = true;
      $scope.update = false;
      $scope.submit = true;
      $scope.cancel = false;
      $scope.userId = true;
    };
  },
]);
