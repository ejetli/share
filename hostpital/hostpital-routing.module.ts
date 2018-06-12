import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../login/services/auth-guard.service'

import { HostpitalComponent } from './containers/hostpital.component';
import { HostpitalViewComponent } from './containers/hostpital-view.component';

const routes: Routes = [
  {
    path:'',
    component: HostpitalViewComponent,

  children: [
    {path:':action', component:HostpitalComponent},
    {path:':action/:id', component:HostpitalComponent},
    {path:'', component: HostpitalComponent},
  ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostpitalRoutingModule { }
