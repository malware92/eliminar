import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  step = 2;

  constructor(){

  }

  onContinue( event: [any, number] ){
    const [data, step] = event;

    switch( step ){
      case 1:
        this.step = 2
        break;
      case 2:
        this.step = 0

    }
  }
}
