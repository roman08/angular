angular.module("hide",[])
	.controller("HideController",function($scope, $http) 
	{
		$scope.posts = [];
	
		$http.get("https://jsonplaceholder.typicode.com/posts")
			.then(function(datos)
			{ 
				console.log($scope.posts = datos.data﻿);
				$scope.posts = datos.data﻿
			},
			function(error){ 

			});
	});