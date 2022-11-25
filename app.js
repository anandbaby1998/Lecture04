(function(){
'use strict'

angular.module('NameCalculator',[])

.controller('NameCalculatorController',function($scope){
  $scope.name ="";
  $scope.totalvalue = 0;

  $scope.displayNumeric = function(){
    var totalnamevalue = calculatename($scope.name);
  $scope.totalvalue = totalnamevalue;
  };

function calculatename(string){

var total = 0;
for (var i = 0; i < string.length; i++){

  total += string.charCodeAt(i);
  
}
return total;

}

});

})();
