import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  constructor(  private authService: AuthService ) { }

  profileJson: string = null;

  ngOnInit(): void {
    this.authService.getUserInfo()
    .subscribe( resp  => {
      if(null != resp){
        this.profileJson = JSON.stringify(resp, null, 2);
      }
    });
    
  }

}
