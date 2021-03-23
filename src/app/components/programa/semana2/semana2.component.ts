import { Component, Input, OnInit } from '@angular/core';
import { MarcasModel } from 'src/app/models/marcas.model';

@Component({
  selector: 'app-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.css']
})
export class Semana2Component implements OnInit {
  
  @Input() marcas = new MarcasModel;

  constructor() { }

  ngOnInit(): void {
  }

  sumarDias = (fecha: Date, d:number) => {
    var fechaFinal = new Date(fecha);
    fechaFinal.setDate( fechaFinal.getDate() + d );
    return fechaFinal;
  }

}
