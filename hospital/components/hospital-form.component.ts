import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'hospital-form',
  template:`
  <div>
  <form (ngSubmit)="onSubmit()" #form="ngForm">
    <section class="form-block">
        <label>hospital Form</label>
        <div class="form-group mx-sm-3 mb-2">
         <label for="name">Name</label>
         <input type="text" name="name" class="form-control" id="name" placeholder="Name" [(ngModel)]="hospitalModel.name">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="address">Address</label>
         <input type="text" name="address" class="form-control" id="address" placeholder="address" [(ngModel)]="hospitalModel.address">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="city">City</label>
         <input type="text" name="city" class="form-control" id="city" placeholder="city" [(ngModel)]="hospitalModel.city">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="country">Country</label>
         <input type="text" name="country" class="form-control" id="country" placeholder="region" [(ngModel)]="hospitalModel.country">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="region">Region</label>
         <input type="text" name="region" class="form-control" id="region" placeholder="region" [(ngModel)]="hospitalModel.region">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="photo">Photo</label>
         <input type="text" name="photo" class="form-control" id="photo" placeholder="photo" [(ngModel)]="hospitalModel.photo">
        </div>

     <a routerLink="hospital"  class="btn btn-default mb-2 btn-sm">Cancel</a>
     <button type="submit" class="btn btn-success mb-2 btn-sm">Submit</button>
        </section>
    </form>
  </div>

  `,
  styles: []

})

export class HospitalFormComponent {

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Input() hospitalmodel

  onSubmit() {
    console.log('Good')
    this.submitted.emit(this.hospitalmodel)
  }

}
