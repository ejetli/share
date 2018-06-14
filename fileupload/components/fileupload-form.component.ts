import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'fileupload-form',
  template:`
  <div>
  <form (ngSubmit)="onSubmit()" #form="ngForm">
    <section class="form-block">
        
        <div class="form-group">
            <label for="status">Type</label>
            <div class="select">
                <select id="status" name="status" [(ngModel)]= "fileuploadModel.type" >
                    <option>mp3</option>
                    <option>video</option>
                    <option>Exams</option>
                </select>
            </div>
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="file">File</label>
         <input type="text" name="file" class="form-control" id="file" placeholder="file" [(ngModel)]="fileuploadModel.file">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="issuedDate">IssuedDate</label>
         <input type="text" name="issuedDate" class="form-control" id="issuedDate" placeholder="issuedDate" [(ngModel)]="fileuploadModel.issuedDate">
        </div>
        <div class="form-group mx-sm-3 mb-2">
         <label for="expiryDate">ExpiryDate</label>
         <input type="text" name="expiryDate" class="form-control" id="expiryDate" placeholder="expiryDate" [(ngModel)]="fileuploadModel.expiryDate">
        </div>

     <button type="submit" class="btn btn-success mb-2 btn-sm">Submit</button>
        </section>
    </form>
  </div>

  `,
  styles: []

})

export class FileuploadFormComponent {

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Input() fileuploadmodel

  onSubmit() {
    console.log('Good')
    this.submitted.emit(this.fileuploadmodel)
  }

}
