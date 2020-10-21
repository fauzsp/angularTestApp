var myApp = angular.module("homeApp", []);
myApp.controller("homeController", function ($scope, $http, $form) {
  var onSuccess = function (data, status, headers, config) {
    $scope.data = data;
  };
  var onError = function (data, status, headers, config) {
    $scope.status = status;
  };
  $http({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/4",
  }).then(function (response) {
    console.log(response, "response");
    data = response.data;
    $scope.message = data.title;
  });
  $scope.person = {
    firstName: "Jamie",
    lastName: "XX",
    salary: 10,
  };
});
