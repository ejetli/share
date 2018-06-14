import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}  from '@angular/router'
import { FileuploadModel } from '../models/fileupload.model';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';


@Component({
  selector: 'app-fileupload',
  template: `
    <fileupload-form
      *ngIf="post || edit"
      (submitted)= "onSubmit($emit)"
      [fileuploadmodel] = "FileuploadModel">
    </fileupload-form>
    <fileupload-list
      *ngIf="list"
      (deleted) = "onDelete($emit)"
      [fileuploads]="fileuploads">
    </fileupload-list>


  `,
  styles: []
})
export class FileuploadComponent implements OnInit {

  action: string;
  id: string;
  list: boolean;
  post: boolean;
  edit: boolean;
  //aform: boolean;
  fileuploadModel = new FileuploadModel(null,null,null,null);


  fileuploads =  [
    { file:'peaple', expiryDate:'buea', issuedDate:'peaple', type:'peaple',},

  ]

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
      this.route.params.subscribe( params => {
      if(params.action) this.action = params.action
      if(params.id) this.id = params.id;
    });

    this.list = !this.action
    this.post = this.action === 'post'
    this.edit = this.action === 'edit'
  //  this.aform = this.action == 'aform'
  }

  onSubmit($emit) {
      console.log($emit)
  }

  onDelete($emit) {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this fileupload!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      cancelButtonColor: 'orange',
      confirmButtonColor: 'red'

    }).then((result) => {

      if (result.value) {
        console.log($emit) // service call

        swal(
          'Deleted!',
          'Fileupload',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        // could add another swal
      }
    })

  }

}
