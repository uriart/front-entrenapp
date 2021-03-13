import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MarcasModel } from 'src/app/models/marcas.model';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styles: [
  ]
})
export class ProgramaComponent implements OnInit {

  idUsuario: string = null;
  marcas = new MarcasModel;

  constructor( public auth: AuthService,
               private marcasService: MarcasService ) { }

  ngOnInit(): void {

    this.auth.user$.subscribe(
      (profile) => {
        (this.idUsuario = JSON.stringify(profile.sub, null, 2))

        //Recogemos las marcas del usuario
        this.marcasService.getMarcas( this.idUsuario )
        .subscribe( resp  => {
            var marcasTemp: any = {
              ...this.marcas
            };
            marcasTemp = resp;
            this.marcas = marcasTemp;          
        });
      }
    );
  }

  sumarDias = (fecha: Date, d:number) => {
    var fechaFinal = new Date(fecha);
    fechaFinal.setDate( fechaFinal.getDate() + d );
    return fechaFinal;
  }

}
