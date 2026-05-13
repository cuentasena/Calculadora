import { Component } from '@angular/core';

type Operacion = '+' | '-' | '*' | '/' | null;

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  display: string = '0';
  

  numeroNuevo: boolean = true;
  

  private primerNumero: number | null = null;
  private operacionGuardada: Operacion = null;
  

  numeros: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  operaciones: string[] = ['+', '-', '*', '/'];


  manejarClick(valor: string) {
 
    if (this.display.includes('Error') && valor !== 'C') {
      this.limpiarTodo();
    }
    
    if (valor === 'C') {
      this.limpiarTodo();
      return;
    }
    
    if (valor === '=') {
      this.hacerCuenta();
      return;
    }
    
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      this.guardarOperacion(valor as Operacion);
      return;
    }
    

    if (this.numeroNuevo) {
      this.display = valor;
      this.numeroNuevo = false;
    } else {
      this.display = this.display + valor;
    }
  }
  

  private guardarOperacion(operacion: Operacion) {
    this.primerNumero = parseFloat(this.display);
    this.operacionGuardada = operacion;
    this.numeroNuevo = true;
  }
  

  private hacerCuenta() {
    if (this.primerNumero === null || this.operacionGuardada === null) {
      return;
    }
    
    const segundoNumero = parseFloat(this.display);
    let resultado: number | null = null;
    
    // El switch que viste en clase
    switch (this.operacionGuardada) {
      case '+':
        resultado = this.primerNumero + segundoNumero;
        break;
      case '-':
        resultado = this.primerNumero - segundoNumero;
        break;
      case '*':
        resultado = this.primerNumero * segundoNumero;
        break;
      case '/':

        if (segundoNumero === 0) {
          resultado = null;
        } else {
          resultado = this.primerNumero / segundoNumero;
        }
        break;
      default:
        return;
    }
    

    if (resultado === null) {
      this.display = 'Error: No se puede dividir por cero';
    } else {
      this.display = resultado.toString();
    }
    
    this.primerNumero = null;
    this.operacionGuardada = null;
    this.numeroNuevo = true;
  }
  
  private limpiarTodo() {
    this.display = '0';
    this.numeroNuevo = true;
    this.primerNumero = null;
    this.operacionGuardada = null;
  }
}