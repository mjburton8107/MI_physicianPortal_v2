angular.module('physicianPortal').controller('patientListController', function($scope, $http, $q){


  $scope.getPatientList = function(){
    // var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/drive/v2/files/id=0B8Dn3ummwrcCOGwtTGdCSzJWT00&'
  }).then(function(response){
    console.log('this is response');
    // var patients = response.data;
  })
  // deferred.resolve(patients);
 }
 // return deferred.promise;

 $scope.response = response;

})
