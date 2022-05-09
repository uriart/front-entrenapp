import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MarcasModel } from 'src/app/models/marcas.model';
import { MarcasService } from 'src/app/services/marcas.service';
import  Swal  from 'sweetalert2';
import { DateTime } from "luxon";

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styles: [
  ]
})
export class MarcasComponent implements OnInit {

  marcas = new MarcasModel;
  idUsuario: string = null;

  constructor(  public auth: AuthService,
                private marcasService: MarcasService,
                private router:Router ) { }

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
            Swal.fire({
              title:'Bienvenido',
              text: 'Introduzca sus marcas para generar el programa de entrenamiento',
              icon: 'info',
              showConfirmButton: true
            });

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
        Swal.fire({
          title:'Actualizado correctamente',
          html: `Dirigete al <a class="link" [routerLink]="[ '../programa']"><i class="far fa-calendar-alt"> </i>Programa</a> para ver los cambios`,
          icon: 'success',
          showConfirmButton: true
        });
      });
  }


  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toLocaleDateString();
  }

}
