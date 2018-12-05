import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {

  formBilling: FormGroup

  constructor(private router: Router) { 
    this.formBilling = new FormGroup({
      creditCardNumber: new FormControl('', [Validators.required]),
      fechaCaducidad: new FormControl('', [Validators.required]),
      numControl: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{3}/)])
    })
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/account'])
  }

  handleClickEnviar() {
    console.log('Enviar los datos')
  }

}