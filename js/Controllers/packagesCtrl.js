angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){
  if ($stateParams.country !== "") {
    var packageInfo = mainSrv.packageInfo;
    var countries = [];
    for (var i = 0; i < packageInfo.length; i++) {
      if (packageInfo[i].country === $stateParams.country)  {
        countries.push(packageInfo[i]);
        $scope.packages = countries;
      }
    }
  } else if ($stateParams.country == "") {
    $scope.packages = mainSrv.packageInfo;
  }
})
