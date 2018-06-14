import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}  from '@angular/router'
import { HospitalModel } from '../models/hospital.model';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';


@Component({
  selector: 'app-hospital',
  template: `
    <hospital-form
      *ngIf="post || edit"
      (submitted)= "onSubmit($emit)"
      [hospitalmodel] = "HospitalModel">
    </hospital-form>
    <hospital-list
      *ngIf="list"
      (deleted) = "onDelete($emit)"
      [hospitals]="hospitals">
    </hospital-list>


  `,
  styles: []
})
export class HospitalComponent implements OnInit {

  action: string;
  id: string;
  list: boolean;
  post: boolean;
  edit: boolean;
  //aform: boolean;
  hospitalModel = new HospitalModel(null,null,null,null,null,null,null);


  hospitals =  [
    {id: 1, name:'peaple', city:'buea', photo:'peaple', region:'peaple', country:'peaple', address:'peaple'},

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
      text: 'You will not be able to recover this hospital!',
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
          'Hospital',
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
