import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Session from "supertokens-auth-react/recipe/session";
import { Nota } from 'src/app/models/nota.model';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-libreta',
  templateUrl: './libreta.component.html',
  styleUrls: ['../../app.component.css']
})
export class LibretaComponent implements OnInit {

  idUsuario: string = null;
  notas: Nota[];
  notaObj = new Nota;

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    Session.getUserId().then((userId) => {
      this.idUsuario = userId.replace('|' ,'').replace('-','');
      this.recuperarNotas();
    })
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
        this.notas = notasTemp.sort((a, b) => a.id - b.id);
      }    
    });
  }

  eliminarNota(idNota: number): void {
    this.notasService.deleteNotaById( idNota )
    .subscribe(response => {
      this.notas = this.notas.filter(item => item.id !== idNota);
    });
  }

  guardarNota(forma: NgForm): void {
    this.notaObj.nota = forma.value.nota;
    this.notaObj.usuario = this.idUsuario;
    this.notasService.guardarNota( this.notaObj )
    .subscribe(response => {
      this.recuperarNotas();
      this.limpiarForm();
    });
  }

  editarNota(nota: Nota): void {
    this.notaObj = nota;
  }

  limpiarForm(): void {
    this.notaObj = new Nota;
  }

}
