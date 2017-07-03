var color=$(".selected").css("background-color");
var $canvas=$("canvas");
var context=$canvas[0].getContext("2d");
var lastEvent;
var mouseDown=false;

$(".controls").on("click","li",function(){
  //Cuando haces click selecciona
  $(this).siblings().removeClass("selected");
  //Cuando haces click deselecciona
  $(this).addClass("selected");
  color=$(this).css("background-color");
});

//Cuando "Nuevo Color" sea presionado
$('#revelarColor').click(function(){
	//Muestra el color seleccionado o el color oculto
	changeColor();
	$('#colorSelect').toggle();
});

//Actualizar el color
function changeColor(){
	var r = $('#red').val();
	var g = $('#green').val();
	var b = $('#blue').val();
	

	$("#newColor").css("background-color","rgb("+r+","+g+","+b+")");
}

function eraser()
{                                
	context.strokeStyle = "rgb(255, 255, 255)";
	context.globalCompositeOperation = "copy";  
	context.strokeStyle = ("rgba(255,255,255,255)");
}

$("input[type=range]").change(changeColor);

//Cuando "Agregar color" sea presionado
$('#addColor').click(function(){
	//Agregar el color a los controlesya asignados
	var $newColor = $("<li></li>");

	$newColor.css("background-color",$("#newColor").css("background-color"));
	$(".controls ul").append($newColor);

	//Seleccionamos el nuevo color
	$newColor.click();
});
//Cuando demos click en el area de canvas
$canvas.mousedown(function(e) {
	lastEvent=e;
	mouseDown=true;
}).mousemove(function(e) {
	//Para dibujar lineas
	if(mouseDown){ //Si esta presionado 
		context.beginPath();	//Se inicia la ruta
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);	//Direcciones en las que nos podemos mover
		context.lineTo(e.offsetX,e.offsetY);
		context.strokeStyle=color;
		context.stroke();
		lastEvent=e;
	}
}).mouseup(function() {
	mouseDown=false;
}).mouseleave(function() {
	$canvas.mouseup();
});