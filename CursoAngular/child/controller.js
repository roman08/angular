angular.module("child",[])
	.run(function($rootScope){
		$rootScope.nombre = "Codigo Facilito";
	})
	.controller("childController",function($scope,$timeout){
		$timeout(function(){
			$scope.$apply(function(){
				$scope.nombre = ":D :P";
			});
		},1000);
		
	})
	.controller("secondController",function($scope){
		
	});