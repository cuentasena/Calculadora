import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent {

  @Input() display: string = '0';
  
  
  get hayError(): boolean {
    return this.display.includes('Error');
  }
}