import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalComponent } from './containers/hospital.component';
import { HospitalViewComponent } from './containers/hospital-view.component';
import { HospitalFormComponent } from './components/hospital-form.component';
import { HospitalListComponent } from './components/hospital-list.component';
import { AgreementFormComponent } from './components/agreement-form.component';





@NgModule({
  imports: [
    CommonModule,
    HospitalRoutingModule,
    FormsModule,
    RouterModule,
     ReactiveFormsModule,
     SweetAlert2Module
  ],
  declarations: [
    HospitalComponent,
    HospitalFormComponent,
    HospitalListComponent,
    HospitalViewComponent,
    AgreementFormComponent,

  ],
  providers: [

  ]
})
export class HospitalModule { }
