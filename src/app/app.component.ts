import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio_clase';
  valor1: number = 0;
  valor2: number = 0;
  suma: number = 0;
  resta: number = 0;
  multiplicación: number = 0;
  division: number = 0;
  arreglo = ["Suma", "Resta", "Multiplicación", "división"];
  error: string = " ";


  contructor(){
    this.datos();
  }

  datos(){
    console.log(this.valor1 + " " + this.valor2);
    this.suma = this.valor1 + this.valor2;
    this.resta = this.valor1 - this.valor2;
    this.multiplicación = this.valor1 * this.valor2
    this.division = this.valor1 / this.valor2;
    this.error = "La suma es: " + this.suma + " , la resta es " + this.resta + " y la multiplicación es: "
     + this.multiplicación + " y la division es " + this.division;
  }

}
