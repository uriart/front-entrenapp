import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProgramaPowerliftingModel } from 'src/app/models/candito.model';
import { ProgramacionesService } from 'src/app/services/programaciones.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { MarcasModel } from 'src/app/models/marcas.model';
import { AlertsService } from 'src/app/services/alerts.service';
import { DateTime } from "luxon";

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html'
})

export class ProgramaComponent implements OnInit {

  idUsuario: string = null;
  programaCandito: ProgramaPowerliftingModel = new ProgramaPowerliftingModel;
  marcas: MarcasModel = new MarcasModel;
  sentadillaMaximaProyectada: string = "";
  pressBancaMaximaProyectada: string = "";
  pesoMuertoMaximaProyectada: string = "";

  constructor( public auth: AuthService,
               public programacionesService: ProgramacionesService,
               private marcasService: MarcasService,
               private alerta:AlertsService) { }


  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        //Obtenemos el identificador del usuario
        this.idUsuario = profile.sub.replace('|' ,'').replace('-','');
        //Llamar al servicio para obtener el programa de entrenamiento en json. Enviar el idUsuario por parámetro
        this.cargarPrograma();
        this.getMarcas();
      });
  }

  cargarPrograma(): void {
    this.programacionesService.obtenerProgramacionCandito( this.idUsuario ).subscribe(
      data => {
        this.programaCandito = data;
      },
      err => {
        this.alerta.showError( err.message, 'Error' );
      }
    );
  }

  getMarcas(): void {
    this.marcasService.getMarcas( this.idUsuario )
    .subscribe( resp  => {
      if(null != resp){
        var marcasTemp: any = {
          ...this.marcas
        };
        marcasTemp = resp;
        this.marcas = marcasTemp;
      }
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
