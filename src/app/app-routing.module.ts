import { Error404Component } from './error404/error404.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { AccountTypeFormComponent } from './account-type-form/account-type-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalFormComponent } from './personal-form/personal-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal' },
  { path: 'personal', component: PersonalFormComponent },
  { path: 'address', component: AddressFormComponent },
  { path: 'account', component: AccountTypeFormComponent },
  { path: 'billing', component: BillingFormComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
