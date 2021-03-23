import { Component, Input, OnInit } from '@angular/core';
import { MarcasModel } from 'src/app/models/marcas.model';

@Component({
  selector: 'app-semana1',
  templateUrl: './semana1.component.html',
  styleUrls: ['./semana1.component.css']
})
export class Semana1Component implements OnInit {
  
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
