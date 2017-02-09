angular.module("MyApp",[])
	.directive('backImg',function(){
		return function(scope,elemet, attrs){
			attrs.$observe('backImg',function(value){
				elemet.css({
					"background": "url("+value+")",
					"background-size": "cover",
					"background-position": "center"
				})
			})
		}
	})
	/*style="background: url(); background-position: center;background-size: cover;"*/
	.controller("AppCtrl",function($scope, $http) 
	{
		console.log("$scope.repos = datos.data﻿");
		$scope.repos = [];
		$http.get("https://api.github.com/users/codigofacilito/repos")
			.then(function(datos)
			{ 
				console.log($scope.repos = datos.data﻿);
				$scope.repos = datos.data﻿
			},
			function(error){ 
				console.log(error);
		});
	});
