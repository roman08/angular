var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(e)
{
	e.nombre = "Roman";
	e.nuevoComentario={};
	e.comentarios = [
		{
			mensaje : "tutorial",
			username : "yo"
		},
		{
			mensaje : "tutorial 2",
			username : "el"
		}
	];
	e.agregarComentario = function(){
		e.comentarios.push(e.nuevoComentario);
		e.nuevoComentario={};
	}
}]);