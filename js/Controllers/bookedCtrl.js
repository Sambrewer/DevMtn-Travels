angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
  var bookPackage = mainSrv.packageInfo;
  var bookedPack = {};
  for (var i = 0; i < bookPackage.length; i++){
    if (bookPackage[i].id == $stateParams.id) {
      bookedPack = bookPackage[i];
    }
  }
  $scope.package = bookedPack;
})
