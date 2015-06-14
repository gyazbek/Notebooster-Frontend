'use strict';

angular.module('angularNoteboosterApp')
  .controller('NewNoteCtrl', function ($scope,$stateParams,nbApiService,Validate) {
    $scope.noteId = "";
    $scope.isUpdating = false;

    init();
    function init(){
      if(typeof $stateParams.noteId !== 'undefined') {
        $scope.noteId = $stateParams.noteId;
        $scope.isUpdating = true;
      }
    };
  });
