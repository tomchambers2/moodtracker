'use strict';

angular.module('starter.controllers', [])
	.controller('DashCtrl', function ($scope, $cordovaDialogs, $firebase) {
  	var ref = new Firebase('https://moodtrackerapp.firebaseio.com/questions/');
	var sync = $firebase(ref);  

	console.log(sync);

		$scope.logMood = function(mood) {
			sync.$push({ mood: mood })
			//$cordovaDialogs.alert(mood);	
		}
	})

	.controller('FriendsCtrl', function($scope, Friends) {
		$cordovaDialogs.alert('Wow!');
	  $scope.friends = Friends.all();
	})

	.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
		$cordovaDialogs.alert('Wow!');
	  $scope.friend = Friends.get($stateParams.friendId);
	})

	.controller('AccountCtrl', function($scope) {
		$cordovaDialogs.alert('Wow!');
	});
