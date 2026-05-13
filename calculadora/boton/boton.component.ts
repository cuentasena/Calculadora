import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

  @Input() valor: string = '';
  

  @Output() onClick = new EventEmitter<string>();


  manejarClick() {
    this.onClick.emit(this.valor);
  }
}