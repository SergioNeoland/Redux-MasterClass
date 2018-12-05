import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-type-form',
  templateUrl: './account-type-form.component.html',
  styleUrls: ['./account-type-form.component.css']
})
export class AccountTypeFormComponent implements OnInit {

  accountSelected: number

  constructor(private router: Router) { 
    this.accountSelected = 0
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/address'])    
  }

  handleClickSiguiente() {
    this.router.navigate(['/billing'])
  }

  handleSelectAccount(accountNumber) {
    this.accountSelected = accountNumber
  }

}
