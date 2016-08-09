(function(angular){
 'use strict';
  
  function ContactCtrl($scope) {
    $scope.search = undefined;
    $scope.myContacts = [
      {name: 'Walter White', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Teste AB', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Teste CS', description: 'Back off, man. I\'m a scientist.'},
      {name: 'William Abbhram', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Tasca J. Forei', description: 'Back off, man. I\'m a scientist.'}
    ];

    $scope.othersContacts = [
      {name: 'Alan', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Giovanna', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Gary', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Sarah', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Aline', description: 'Back off, man. I\'m a scientist.'},
      {name: 'July', description: 'Back off, man. I\'m a scientist.'}
    ];
  }

  angular.module('contactModule', [])
  .controller('ContactCtrl', ContactCtrl);
  
})(angular);