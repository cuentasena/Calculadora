import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotonComponent } from './calculadora/boton/boton.component';
import { PantallaComponent } from './calculadora/pantalla/pantalla.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BotonComponent,
    PantallaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }