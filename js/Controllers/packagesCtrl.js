angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){
  if ($stateParams) {
    var packageInfo = mainSrv.packageInfo;
    var countries = [];
    for (var i = 0; i < packageInfo.length; i++) {
      if (packageInfo[i].country === $stateParams.country)  {
        countries.push(packageInfo[i]);
      }
    }
    $scope.packages = countries;
  }
  else {
    $scope.packages = mainSrv.packageInfo;
  }
})
