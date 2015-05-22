var myApp = angular.module('myApp', []);

myApp.controller('mainController', [
  '$scope', 
  function($scope) {
    $scope.test = "Hello world!",
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ]

    $scope.addPost = function(){
      $scope.posts.push({
        title: $scope.title, upvotes: 0});
        $scope.title = "";
    };

}]);
$('document').ready(
  function(){
    $('.offscreen').hide;
    setTimeout(function(){
    console.log('hello');
      // $('.offscreen').css("margin-right", "0")
      $('.offscreen').animate({
                marginRight: '0',
            }, 300 );
    }, 2000);
});
    // $('.offscreen')