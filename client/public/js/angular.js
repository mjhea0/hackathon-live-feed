var stream = angular.module('myApp', ['ui.bootstrap']);

stream.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
});

stream.controller('TweetCtrl', ['$scope', 'socket', function($scope, socket){
    $scope.status = "No tweets yet...";
    $scope.tweets = [];
    var i = 0;
    socket.on('newTweet', function (tweet) {
      $scope.status = "";
      $scope.tweets.push(tweet);
    });
  }
]);

stream.controller('CommitCtrl', ['$scope', 'socket', function($scope, socket){
    $scope.status = "No commits yet...";
    $scope.commits = [];
    var i = 0;
    // new commit arrives from server
    socket.on('newCommit', function (commit) {
      console.log(commit)
      console.log("hi!");
      $scope.status = "";
      $scope.commits = commit;
      console.log('commits',$scope.commits)
    });
  }
]);