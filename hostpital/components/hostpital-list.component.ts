import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'hostpital-list',
  template: `
  <h3>Hostpital</h3>
  <p><a routerLink="./hostpitals" class="btn btn-success btn-sm">Add Hostpitals</a></p>
  <p><a routerLink="./addreeform" class="btn btn-success btn-sm">Add Addree Form</a></p>
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


        <tr *ngFor="let hostpital of hostpitals">
          <td>{{hostpital.id}}</td>
          <td>{{hostpital.name}}</td>
          <td>{{hostpital.address}}</td>
          <td>{{hostpital.city}}</td>
          <td>{{hostpital.region}}</td>
          <td>{{hostpital.country}}</td>
          <td>{{hostpital.photo}}</td>

          <td>
            <button
              (click) = "onDelete(hostpital.id)"
              class="btn btn-danger btn-sm">Delete</button>
              <a routerLink="edit/{{hostpital.id}}" class="btn btn-primary btn-sm">Edit</a>
          </td>
        </tr>
    </table>
  </div>
  `,
  styles: []
  })
  export class HostpitalListComponent implements OnInit {

  @Output() deleted: EventEmitter<any> = new EventEmitter();
  @Input() hostpitals;

  onDelete(id) {
    console.log('Good')
    this.deleted.emit(id)
  }
  ngOnInit() {
  }

  }
