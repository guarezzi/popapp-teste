(function(angular){
 'use strict';
  
  function ContactCtrl($scope) {
    $scope.search = undefined;
    $scope.persons = [
      {name: 'Walter White', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Teste AB', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Teste CS', description: 'Back off, man. I\'m a scientist.'},
      {name: 'William Abbhram', description: 'Back off, man. I\'m a scientist.'},
      {name: 'Tasca J. Forei', description: 'Back off, man. I\'m a scientist.'}
    ];
  }

  angular.module('contactModule', [])
  .controller('ContactCtrl', ContactCtrl);
  
})(angular);