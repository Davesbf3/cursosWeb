import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  nombreDelComponente = "Componente home";
 public fecha;

 constructor(){
 	this.fecha = new Date(2017, 5, 30);
 }
}