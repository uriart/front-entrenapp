import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CanditoModel } from 'src/app/models/candito.model';
import { ProgramacionesService } from 'src/app/services/programaciones.service';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styles: [
  ]
})
export class ProgramaComponent implements OnInit {

  idUsuario: string = null;

  programaCandito: CanditoModel = new CanditoModel;

  constructor( public auth: AuthService,
               private programacionesService: ProgramacionesService ) { }

  ngOnInit(): void {

    this.auth.user$.subscribe(
      (profile) => {
        (this.idUsuario = JSON.stringify(profile.sub, null, 2))

        //Llamar al servicio para obtener lan programación candito. Enviar el idUsuario por parámetro
        this.programaCandito = this.programacionesService.generarProgramacionCandito( this.idUsuario );

        console.log(this.programaCandito);
        
      }
    );

  }

}
