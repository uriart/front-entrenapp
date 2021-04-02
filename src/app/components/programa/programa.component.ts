import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CanditoModel } from 'src/app/models/candito.model';
import { ProgramacionesService } from 'src/app/services/programaciones.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { MarcasModel } from 'src/app/models/marcas.model';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})

export class ProgramaComponent implements OnInit {

  idUsuario: string = null;
  programaCandito: CanditoModel = new CanditoModel;
  marcas: MarcasModel = new MarcasModel;
  sentadillaMaximaProyectada: string = "";
  pressBancaMaximaProyectada: string = "";
  pesoMuertoMaximaProyectada: string = "";

  constructor( public auth: AuthService,
               private programacionesService: ProgramacionesService,
               private marcasService: MarcasService) { }


  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {

        //Obtenemos el identificador del usuario
        this.idUsuario = JSON.stringify(profile.sub, null, 2);

        //Llamar al servicio para obtener lan programación candito. Enviar el idUsuario por parámetro
        this.programaCandito = this.programacionesService.generarProgramacionCandito( this.idUsuario );
        
        //Recogemos las marcas del usuario
        this.marcasService.getMarcas( this.idUsuario )
          .subscribe( (marcasObetnidas: MarcasModel)  => {
            this.marcas = marcasObetnidas;
          });
      });
  }

  calcularMPSentadilla(value){
    if(value == ""){
      this.sentadillaMaximaProyectada = "";  
    } else {
      this.sentadillaMaximaProyectada = (this.marcas.sentadilla * value).toFixed(0).toString() + " kg";
    }
  }

  calcularMPPressBanca(value){
    if(value == ""){
      this.pressBancaMaximaProyectada = "";  
    } else {
      this.pressBancaMaximaProyectada = (this.marcas.pressBanca * value).toFixed(0).toString() + " kg";
    }
  }

  calcularMPPesoMuerto(value){
    if(value == ""){
      this.pesoMuertoMaximaProyectada = "";  
    } else {
      this.pesoMuertoMaximaProyectada = (this.marcas.pesoMuerto * value).toFixed(0).toString() + " kg";
    }
  }


}
