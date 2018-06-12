import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'hostpital-form',
  template:`
  <div>
  <form (ngSubmit)="onSubmit()" #form="ngForm">
    <section class="form-block">
        <label>hostpital Form</label>
        <div class="form-group mx-sm-3 mb-2">
         <label for="name">Name</label>
         <input type="text" name="name" class="form-control" id="name" placeholder="Name" [(ngModel)]="hostpitalModel.name">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="address">Address</label>
         <input type="text" name="address" class="form-control" id="address" placeholder="address" [(ngModel)]="hostpitalModel.address">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="city">City</label>
         <input type="text" name="city" class="form-control" id="city" placeholder="city" [(ngModel)]="hostpitalModel.city">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="country">Country</label>
         <input type="text" name="country" class="form-control" id="country" placeholder="region" [(ngModel)]="hostpitalModel.country">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="region">Region</label>
         <input type="text" name="region" class="form-control" id="region" placeholder="region" [(ngModel)]="hostpitalModel.region">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="photo">Photo</label>
         <input type="text" name="photo" class="form-control" id="photo" placeholder="photo" [(ngModel)]="hostpitalModel.photo">
        </div>

     <a routerLink="/hostpital"  class="btn btn-default mb-2 btn-sm">Cancel</a>
     <button type="submit" class="btn btn-success mb-2 btn-sm">Submit</button>
        </section>
    </form>
  </div>
  `,
  styles: []

})

export class HostpitalFormComponent {

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Input() hostpitalmodel
  onSubmit() {
    console.log('Good')
    this.submitted.emit(this.hostpitalmodel)
  }

}
