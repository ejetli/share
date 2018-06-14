import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core'

@Component({
  selector: 'agree-form',
  template: `
    <div>
    <h1> AgreementForm</h1>



    <form (ngSubmit)="onSubmit()" #form="ngForm">
      <section class="form-block">
          <label>hospital Form</label>

          <div class="form-group">
              <label for="content">content</label>
              <input type="text" name="content" id="content" placeholder="content" [(ngModel)]= "hospitalmodel.content" size="35">
          </div>

         <div class="form-group">
            <label for="commission">commission</label>
            <textarea name="commission" id="commission" rows="5"  [(ngModel)]= "hospitalmodel.commission"  size="45"></textarea>
        </div>

     <div class="form-group">
         <label for="cost">cost</label>
         <input type="text" name="cost" id="cost" placeholder="cost" [(ngModel)]= "hospitalmodel.cost" size="35">
     </div>

     <div class="form-group">
      <label for="test">Test</label>
      <textarea name="test" id="test" rows="5" [(ngModel)]= "hospitalmodel.test" size="45"></textarea>
    </div>

              <a routerLink="/hospital"  class="btn btn-default">Cancel</a>
              <button type="submit" class="btn btn-success">Submit</button>
          </section>
      </form>
    </div>

  `
})

export class AgreementFormComponent implements OnInit  {

  ngOnInit() {

  }

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Input() hospitalmodel
  onSubmit() {
    console.log('Good')
    this.submitted.emit(this.hospitalmodel)
  }

}
