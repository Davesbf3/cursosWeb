import { Component } from '@angular/core';
import { Empleado } from "./empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent {
  //Atributos
  public nombreDelComponente = "Componente de empleado";

  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public bandera = false;

  //TWDB
  public colorSeleccionado:string;


  //Tipos dde datos
  public nombre:string;
  public edad:number;
  /*public mayorEdad:boolean = true;
  public var1:any = "Cruz";
  public var2:any = 21;

  //Array
  public hobbies:Array<string> = ['Ver Netflix','Dormir','Viajar'];
  public cosasFavoritas:Array<any> = ['Comer',10,'Sneakers'];*/

  constructor(){ //El constructor inicializa atributos
  	//this.nombre="David";
  	//this.edad=21;
  	this.empleado = new Empleado("David",21,"Programador",true, "blue");

  	this.trabajadores = [
  		new Empleado("Marco",40,"Jefe",false,"blue"),
  		new Empleado("Jose Luis",55,"Chacaloide",true,"red"),
  		new Empleado("Guaco",60,"Wako",false,"yellow"),
  		new Empleado("Liz",25,"Administradora",true,"pink")
  	];
  }

  ngOnInit(){//Inicializa metodos
  	//this.saludar(this.nombre);
  	//this.varYlet();
  	console.log(this.empleado);
  }

  cambiarBono(variableBono){
  	this.empleado.bono = variableBono;
  	this.trabajadores[0].bono = variableBono;

  }

  //TWDB
  getColorSeleccionado(){
  	console.log(this.colorSeleccionado);
  }

  //Metodos
  saludar(nombre){
  	alert("Hola, soy "+nombre);
  }

  //Diferencia entre var y let
  varYlet(){
  	var numero = 5;

  	if (numero === 5) {
  		//numero = 8;
  		let numero = 8; //let hace las variables entre una llave, solo es un scope
  		console.log(numero)
  	}
  	console.log(numero); //var le cambia el valor siempre
  }
}