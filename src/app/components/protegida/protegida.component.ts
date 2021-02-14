import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: [
  ]
})
export class ProtegidaComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit(): void {
  }

}
