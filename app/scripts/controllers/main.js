'use strict';

angular.module('wedrsvpApp')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase("https://kajan.firebaseIO.com/");
        $scope.messages = [];
        angularFire(ref, $scope, "messages");
  });
