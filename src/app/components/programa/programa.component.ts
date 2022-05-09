import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProgramaPowerliftingModel } from 'src/app/models/candito.model';
import { ProgramacionesService } from 'src/app/services/programaciones.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { MarcasModel } from 'src/app/models/marcas.model';

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
               private marcasService: MarcasService) { }


  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        //Obtenemos el identificador del usuario
        this.idUsuario = profile.sub.replace('|' ,'').replace('-','');
        //Llamar al servicio para obtener el programa de entrenamiento en json. Enviar el idUsuario por parámetro
        this.cargarPrograma();
      });
  }

  cargarPrograma(): void {
    this.programacionesService.obtenerProgramacionCandito( this.idUsuario ).subscribe(
      data => {
        this.programaCandito = data;
      },
      err => {
        console.log(err);
      }
    );
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
