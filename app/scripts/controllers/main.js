'use strict';

angular.module('wedrsvpApp')
  .controller('MainCtrl', function ($scope, angularFire) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase("https://kajan.firebaseIO.com/");
        $scope.rsvp = [];
        angularFire(ref, $scope, "rsvp");

        $scope.addRsvp = function(e, attending) {
          $scope.rsvp.push({from: $scope.name, attending: attending});
          	
        }

  });
