import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  step = 1;

  constructor(){

  }

  onContinue( event: [any, number] ){
    const [data, step] = event;

    switch( step ){
      case 1:
        this.step = 1
        break;
      case 2:
        this.step = 0
    }
  }
}
