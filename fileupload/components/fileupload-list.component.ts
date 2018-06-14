import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'fileupload-list',
  template: `
  <h3>Fileupload</h3>
  <fileupload-form></fileupload-form>
  <div class="progress loop"><progress></progress></div>

  <div class="table-responsive">
    <table class="table table-striped">
        <tr>
          <th>Type</th>
          <th>File</th>
          <th>IssuedDate</th>
          <th>ExpiryDate</th>
          <th>Action</th>

        </tr>


        <tr *ngFor="let fileupload of fileuploads">
          <td>{{fileupload.type}}</td>
          <td>{{fileupload.file}}</td>
          <td>{{fileupload.issuedDate}}</td>
          <td>{{fileupload.expiryDate}}</td>

          <td>
            <button
              (click) = "onDelete(fileupload.id)"
              class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
    </table>
  </div>
  `,
  styles: []
  })
  export class FileuploadListComponent implements OnInit {

  @Output() deleted: EventEmitter<any> = new EventEmitter();
  @Input() fileuploads;

  onDelete(id) {
    console.log('Good')
    this.deleted.emit(id)
  }
  ngOnInit() {
  }

  }
