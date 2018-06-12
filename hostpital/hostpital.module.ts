import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostpitalRoutingModule } from './hostpital-routing.module';
import { HostpitalComponent } from './containers/hostpital.component';
import { HostpitalViewComponent } from './containers/hostpital-view.component';
import { HostpitalFormComponent } from './components/hostpital-form.component';
import { HostpitalListComponent } from './components/hostpital-list.component';
import { FormsModule } from '@angular/forms';
import { AgreementFormComponent } from './components/agreement-form.component';





@NgModule({
  imports: [
    CommonModule,
    HostpitalRoutingModule,
    FormsModule
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
