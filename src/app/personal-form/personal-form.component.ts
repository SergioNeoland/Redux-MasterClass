import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CHANGE_PERSONAL_INFO, UPDATE_PERCENT_COMPLETED } from '../actions';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  formPersonal: FormGroup

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) {
// Creo una variable y me traigo el estado de redux y le pido el objeto entero o le paso el param que quiero ".personalInfo"
    let personalInfo = this.ngRedux.getState().personalInfo

    this.formPersonal = new FormGroup({
      // el 1º param que tenga valor es el que coge, si personalInfo.nombre no tiene valor, cogerá ''
      nombre: new FormControl(personalInfo.nombre || '', [Validators.required]),
      apellidos: new FormControl(personalInfo.apellidos ||'', [Validators.required]),
      edad: new FormControl(personalInfo.edad || '', [Validators.required, Validators.pattern(/[0-1]{1}[0-9]{0,2}/)]),
      email: new FormControl(personalInfo.email || '', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
    })
  }

  ngOnInit() {
  }

  handleClickSiguiente() {
    this.ngRedux.dispatch({
      type: UPDATE_PERCENT_COMPLETED,
      data: 25
    })

    this.ngRedux.dispatch({
      type: CHANGE_PERSONAL_INFO,  //le mando la acción a cambiar
      data: this.formPersonal.value  //y los nuevos valores  (en este caso es un objeto "formulario")
    })
    this.router.navigate(['/address']) //mando la acción antes de navegar a otra parte
  }

}



// this.ngRedux.dispatch({
//       type: UPDATE_USER_TOKEN,
//       data: this.usertoken  
//     })

// this.ngRedux.dispatch({
//       type: REMOVE_USER_TOKEN,  
//     })