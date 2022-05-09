import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf="isLoading$ | async"> 
      <div class="spinner-border text-dark" role="status"> 
        <span class="visually-hidden">Loading...</span> 
      </div> 
    </div>`,
  styleUrls: ['../../app.component.css']
})
export class SpinnerComponent {

  isLoading$ = this.spinnerSvc.isLoading$;

  constructor(private spinnerSvc:SpinnerService) { }

}
