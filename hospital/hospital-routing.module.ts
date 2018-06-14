import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../login/services/auth-guard.service'

import { HospitalComponent } from './containers/hospital.component';
import { HospitalViewComponent } from './containers/hospital-view.component';
import { AgreementFormComponent } from './components/agreement-form.component';

const routes: Routes = [
  {
    path:'',
    component: HospitalViewComponent,

  children: [
    {path:'agreement', component:AgreementFormComponent},
    {path:':action', component:HospitalComponent},
    {path:':action/:id', component:HospitalComponent},
    {path:'', component: HospitalComponent},
  ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
