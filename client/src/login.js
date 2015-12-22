angular.module('pegasys.login',[])
  .controller('LoginController', function($log,$location,$scope,Login,DB) {
    $scope.user = {};
    $scope.welcome = 'User Login';
    $scope.buttonText = 'Login';
    $scope.submit = function(){
      DB.postRequest('login',$scope.user).then(
        function(){
          $log.log('submitted');
          $location.path('/mapview');
        });
    };
  });
