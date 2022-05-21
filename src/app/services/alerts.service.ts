import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private toast:ToastrService) { }

  showSucces(texto, titulo){
    this.toast.success(texto, titulo, {
      progressBar: true
    });
  }

  showError(texto, titulo){
    this.toast.error(texto, titulo, {
      progressBar: true
    });
  }

  showInfo(texto, titulo){
    this.toast.info(texto, titulo, {
      progressBar: true
    });
  }
}
