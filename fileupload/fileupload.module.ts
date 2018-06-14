import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FileuploadRoutingModule } from './fileupload-routing.module';
import { FileuploadComponent } from './containers/fileupload.component';
import { FileuploadViewComponent } from './containers/fileupload-view.component';
import { FileuploadFormComponent } from './components/fileupload-form.component';
import { FileuploadListComponent } from './components/fileupload-list.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    FileuploadRoutingModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    FileuploadComponent,
    FileuploadFormComponent,
    FileuploadListComponent,
    FileuploadViewComponent,

  ],
  providers: [

  ]
})
export class FileuploadModule { }
