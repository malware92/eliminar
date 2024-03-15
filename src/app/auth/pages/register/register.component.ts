import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { onlyNumbers } from 'src/app/util/only-numbers';
import { regularExpressions } from 'src/app/util/regular-expressions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  onlyNumbers = onlyNumbers

  @ViewChild('TyC') TyC!: TemplateRef<any>;

  constructor(private fb: FormBuilder, private modalService: NgbModal){

  }


  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(regularExpressions.email)]],
    names: ['', [Validators.required, Validators.minLength(5)]],
    lastNames: ['', [Validators.required, Validators.minLength(5)]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    rol: [0, [Validators.required]],
    acceptTerms: [false, [Validators.requiredTrue]],
  })

  roles = [
    { value: 1, label: 'Agencia' },
    { value: 2, label: 'Anunciante' },
    { value: 3, label: 'Account Manager' },
    { value: 4, label: 'Diseñador' },
  ]

  continue(){
  }

  clickCheck(event: any){

    if(this.form.controls['acceptTerms'].value) return;

    event.preventDefault();
    this.modalService.open(this.TyC,).result
    .then(console.log).catch(console.log)
  }

  acceptTerms(){
    this.form.controls['acceptTerms'].setValue(true)
    this.closeModal()
  }

  closeModal(){
    this.modalService.dismissAll()
  }

}
