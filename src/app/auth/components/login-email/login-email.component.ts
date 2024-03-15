import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { regularExpressions } from 'src/app/util/regular-expressions';

@Component({
  standalone: true,
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginEmailComponent implements OnInit{

  @Output() onContinue: EventEmitter<[string, number]> = new EventEmitter();

  constructor(private fb: FormBuilder){}

  step = 1;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(regularExpressions.email)]],
  })

  habilitarCampo = false;

  ngOnInit(){
  }

  continue(){
    this.onContinue.emit( [this.form.value.email, this.step] )
  }
}
