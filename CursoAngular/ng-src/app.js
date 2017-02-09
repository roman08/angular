angular.module("MyApp",[])
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
