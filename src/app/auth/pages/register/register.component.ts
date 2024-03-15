import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { onlyNumbers } from 'src/app/util/only-numbers';
import { regularExpressions } from 'src/app/util/regular-expressions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  onlyNumbers = onlyNumbers

  constructor(private fb: FormBuilder){



  }

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(regularExpressions.email)]],
    names: ['', [Validators.required, Validators.minLength(5)]],
    lastNames: ['', [Validators.required, Validators.minLength(5)]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    rol: [0, [Validators.required]],
    acceptTerms: ['', [Validators.required]],
  })

  roles = [
    { value: 1, label: 'Agencia' },
    { value: 2, label: 'Anunciante' },
    { value: 3, label: 'Account Manager' },
    { value: 4, label: 'Diseñador' },
  ]

  continue(){
  }
}
