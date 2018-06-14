import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'hospital-list',
  template: `
  <h3>Hospital</h3>
  <p><a routerLink="post" class="btn btn-success btn-sm">Add Hospital</a></p>
  <p><a routerLink="./agreement" class="btn btn-success btn-sm">Add Addree Form</a></p>
  <div class="progress loop"><progress></progress></div>

  <div class="table-responsive">
    <table class="table table-striped">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Region</th>
          <th>Country</th>
          <th>Photo</th>
          <th>Action</th>
        </tr>


        <tr *ngFor="let hospital of hospitals">
          <td>{{hospital.id}}</td>
          <td>{{hospital.name}}</td>
          <td>{{hospital.address}}</td>
          <td>{{hospital.city}}</td>
          <td>{{hospital.region}}</td>
          <td>{{hospital.country}}</td>
          <td>{{hospital.photo}}</td>

          <td>
            <button
              (click) = "onDelete(hospital.id)"
              class="btn btn-danger btn-sm">Delete</button>
              <a routerLink="edit/{{hospital.id}}" class="btn btn-primary btn-sm">Edit</a>
          </td>
        </tr>
    </table>
  </div>
  `,
  styles: []
  })
  export class HospitalListComponent implements OnInit {

  @Output() deleted: EventEmitter<any> = new EventEmitter();
  @Input() hospitals;

  onDelete(id) {
    console.log('Good')
    this.deleted.emit(id)
  }
  ngOnInit() {
  }

  }
