import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  step: number = 1;

  textByStep = {
    '=1': 'Para acceder a la plataforma ingresa con tu correo electrónico.',
    '=2': 'Pulsa clic sobre la herramienta a la cual deseas ingresar.',
  }

  setStep( value: number ){
    this.step = value
  }
}
