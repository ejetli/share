import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { HostpitalRoutingModule } from './hostpital-routing.module';
import { HostpitalComponent } from './containers/hostpital.component';
import { HostpitalViewComponent } from './containers/hostpital-view.component';
import { HostpitalFormComponent } from './components/hostpital-form.component';
import { HostpitalListComponent } from './components/hostpital-list.component';
import { AgreementFormComponent } from './components/agreement-form.component';





@NgModule({
  imports: [
    CommonModule,
    HostpitalRoutingModule,
    FormsModule,
    RouterModule,
     ReactiveFormsModule,
     SweetAlert2Module
  ],
  declarations: [
    HostpitalComponent,
    HostpitalFormComponent,
    HostpitalListComponent,
    HostpitalViewComponent,
    AgreementFormComponent,

  ],
  providers: [

  ]
})
export class HostpitalModule { }
