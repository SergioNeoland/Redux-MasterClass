import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CHANGE_PERSONAL_INFO, CHANGE_ADDRESS_INFO, UPDATE_PERCENT_COMPLETED } from '../actions';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  formAddress: FormGroup

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) { 
    this.formAddress = new FormGroup({
      calle: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.pattern(/[0-1]{1}[0-9]{0,2}/)]),
      codigoPostal: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{5}/)]),
      ciudad: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/personal'])
  }

  handleClickSiguiente() {
    this.ngRedux.dispatch({
      type: UPDATE_PERCENT_COMPLETED,
      data: 50
    })
    this.ngRedux.dispatch({
      type: CHANGE_ADDRESS_INFO,
      data: this.formAddress.value
    })

    this.router.navigate(['/account'])    
  }

}
