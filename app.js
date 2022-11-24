(function(){
'use strict'


angular.module('myfirstapp',[])
.controller('myfirstcontroller',function($scope) {

$scope.name ="Anand";
$scope.hello = function(){
  return "   welcome to angular";
};
});

})();
