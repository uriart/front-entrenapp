import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MarcasModel } from 'src/app/models/marcas.model';
import { MarcasService } from 'src/app/services/marcas.service';
import { DateTime } from "luxon";
import { AlertsService } from "../../services/alerts.service";

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['../../app.component.css']
})
export class MarcasComponent implements OnInit {

  marcas = new MarcasModel;
  idUsuario: string = null;
  alertType = "alert-success";
  alertMsg: string = null;
  alertStatus = "visually-hidden";
  alertIcon = "Info";

  constructor(  public auth: AuthService,
                private marcasService: MarcasService,
                private alerta:AlertsService ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.idUsuario = profile.sub.replace('|' ,'').replace('-','');
        //Recogemos las anteriores marcas del usuario
        this.marcasService.getMarcas( this.idUsuario )
        .subscribe( resp  => {
          if(null != resp){
            var marcasTemp: any = {
              ...this.marcas
            };
            marcasTemp = resp;
            marcasTemp.fechaInicio = DateTime
                              .fromFormat( marcasTemp.fechaInicio, 'dd/MM/yyyy' )
                              .toFormat( 'yyyy-MM-dd' );

            this.marcas = marcasTemp;
          } else {
            this.alerta.showInfo(
              'Introduzca sus marcas para generar el programa de entrenamiento',
              'Atención'
            );
          }
        });
      }
    );

  }

  guardar( forma: NgForm ) {
    //Validamos el formulario
    if(forma.invalid) {
      Object.values(forma.controls).forEach(control => { 
        control.markAsTouched();
       });
      return;
    }

    //formateamos la fecha
    forma.value.fechaInicio = this.fromJsonDate(forma.value.fechaInicio);
    this.marcasService.crearMarcas( forma.value, this.idUsuario )
      .subscribe( resp => {
        this.alerta.showSucces(
          'Dirigete al Programa para ver los cambios',
          'Actualizado correctamente'
        );
      }, err => {
        this.alerta.showError( err.message, 'Error' );
      });
  }


  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toLocaleDateString();
  }

}
