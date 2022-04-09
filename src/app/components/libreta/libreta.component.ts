import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-libreta',
  templateUrl: './libreta.component.html',
  styleUrls: ['./libreta.component.css']
})
export class LibretaComponent implements OnInit {

  idUsuario: string = null;
  notas: string[] = [""];

  constructor(public auth: AuthService,
              private notasService: NotasService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        (this.idUsuario = JSON.stringify(profile.sub, null, 2))
        this.recuperarNotas();
      }
    );
  }

  nuevaNota(): void {
    this.notasService.nuevaNota( this.notas, this.idUsuario )
    .subscribe( resp => {
      this.recuperarNotas();
    });
  }

  eliminarNota(index: number): void {
    console.log(index);
  }

  recuperarNotas():void {
    //Recogemos las notas del usuario
    this.notasService.getNotas( this.idUsuario )
    .subscribe( resp  => {
      if(null != resp){
        var notasTemp: any = {
          ...this.notas
        };
        notasTemp = resp;
        this.notas = notasTemp;
      }    
    });
  }


}
