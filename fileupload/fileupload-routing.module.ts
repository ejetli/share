import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../login/services/auth-guard.service'

import { FileuploadComponent } from './containers/fileupload.component';
import { FileuploadViewComponent } from './containers/fileupload-view.component';

const routes: Routes = [
  {
    path: '',
    component: FileuploadViewComponent,
    

    children: [
      {path:':action', component:FileuploadComponent},
      {path:':action/:id', component:FileuploadComponent},
      {path:'', component: FileuploadComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileuploadRoutingModule { }
