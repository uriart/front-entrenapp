import { Injectable } from '@angular/core';
import { MarcasService } from 'src/app/services/marcas.service';

import { MarcasModel } from '../models/marcas.model';
import { CanditoModel } from '../models/candito.model';
import { SemanaModel } from '../models/semana.model';
import { DiaModel } from '../models/dia.model';
import { EjercicioModel } from '../models/ejercicio.model';
import { PesoRepsModel } from '../models/pesoReps.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionesService {

  programaCandito: CanditoModel = new CanditoModel;

  constructor(private marcasService: MarcasService) { }

  generarProgramacionCandito(idUsuario: string){
    
    //Recogemos las marcas del usuario
    this.marcasService.getMarcas( idUsuario )
    .subscribe( (marcas: MarcasModel)  => {

      //Crear json para enviar a front
      var listaSemanas = new Array<SemanaModel>();
        listaSemanas.push(this.crearSemana1(marcas));
        listaSemanas.push(this.crearSemana2(marcas));
        listaSemanas.push(this.crearSemana3(marcas));
        listaSemanas.push(this.crearSemana4(marcas));
        listaSemanas.push(this.crearSemana5(marcas));
        listaSemanas.push(null);
      this.programaCandito.semana = listaSemanas;
    });
    
    return this.programaCandito;

  }

  crearSemana1 = (marcas: MarcasModel) => {
    
    var semana1: SemanaModel = new SemanaModel;
    semana1.descripcion = "Acondicionamiento Muscular";
    
      var listaDias = new Array<DiaModel>();

      var dia1: DiaModel = new DiaModel;
      dia1.fechaDia = marcas.fechaInicio;

      var listaEjerciciosDia1 = new Array<EjercicioModel>();
        listaEjerciciosDia1.push(this.crearEjercicio('Sentadilla', [80,80,80,80], ['x6','x6','x6','x6'], marcas.sentadilla));
        listaEjerciciosDia1.push(this.crearEjercicio('Peso Muerto', [80,80], ['x6','x6'], marcas.pesoMuerto));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia1.ejercicios = listaEjerciciosDia1;
      listaDias.push(dia1);

      var dia2: DiaModel = new DiaModel;
      dia2.fechaDia = this.sumarDias(marcas.fechaInicio, 1);
      var listaEjerciciosDia2 = new Array<EjercicioModel>();
        listaEjerciciosDia2.push(this.crearEjercicio('Press Banca', [50,65,75,77], ['x10','x10','x8','x6'], marcas.pressBanca));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda1, [], ['x10','x10','x8','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda2, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia2.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia2);

      var dia3: DiaModel = new DiaModel;
      dia3.fechaDia = this.sumarDias(marcas.fechaInicio, 3);
      //El dia 3 es idéntico al dia 2
      dia3.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia3);

      var dia4: DiaModel = new DiaModel;
      dia4.fechaDia = this.sumarDias(marcas.fechaInicio, 4);
      var listaEjerciciosDia4 = new Array<EjercicioModel>();
        listaEjerciciosDia4.push(this.crearEjercicio('Sentadilla', [70,70,70,70], ['x8','x8','x8','x8'], marcas.sentadilla));
        listaEjerciciosDia4.push(this.crearEjercicio('Peso Muerto', [70,70], ['x8','x8'], marcas.pesoMuerto));
        listaEjerciciosDia4.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia4.ejercicios = listaEjerciciosDia4;
      listaDias.push(dia4);

      var dia5: DiaModel = new DiaModel;
      dia5.fechaDia = this.sumarDias(marcas.fechaInicio, 5);
      var listaEjerciciosDia5 = new Array<EjercicioModel>();
        listaEjerciciosDia5.push(this.crearEjercicio('Press Banca', [80], ['MR'], marcas.pressBanca));
        listaEjerciciosDia5.push(this.crearEjercicio(marcas.espalda1, [], ['x10','x10','x8','x6'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio(marcas.espalda2, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
        dia5.ejercicios = listaEjerciciosDia5;
      listaDias.push(dia5);
      
      semana1.dias = listaDias;

      return semana1;
  }

  crearSemana2 = (marcas: MarcasModel) => {
    
    var semana2: SemanaModel = new SemanaModel;
    semana2.descripcion = "Hipertrofia Muscular";
    
      var listaDias = new Array<DiaModel>();

      var dia1: DiaModel = new DiaModel;
      dia1.fechaDia = this.sumarDias(marcas.fechaInicio, 7);

      var listaEjerciciosDia1 = new Array<EjercicioModel>();
        listaEjerciciosDia1.push(this.crearEjercicio('Sentadilla', [80], ['MR10'], marcas.sentadilla));
        listaEjerciciosDia1.push(this.filaInformativa(marcas.sentadilla, 'info1'));
        listaEjerciciosDia1.push(this.crearEjercicio('Variación Peso Muerto', [], ['x8','x8','x8'], marcas.pesoMuerto));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));

      dia1.ejercicios = listaEjerciciosDia1;
      listaDias.push(dia1);

      var dia2: DiaModel = new DiaModel;
      dia2.fechaDia = this.sumarDias(marcas.fechaInicio, 8);
      var listaEjerciciosDia2 = new Array<EjercicioModel>();
        listaEjerciciosDia2.push(this.crearEjercicio('Press Banca', [72,77,80], ['x10','x8','x6-8'], marcas.pressBanca));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda1, [], ['x10','x8','x8'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x10','x8','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda2, [], ['x10','x8','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia2.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia2);

      var dia3: DiaModel = new DiaModel;
      dia3.fechaDia = this.sumarDias(marcas.fechaInicio, 10);
      var listaEjerciciosDia3 = new Array<EjercicioModel>();
        listaEjerciciosDia3.push(this.crearEjercicio('Sentadilla', [83], ['MR10'], marcas.sentadilla));
        listaEjerciciosDia3.push(this.filaInformativa(marcas.sentadilla, 'info2'));
        listaEjerciciosDia3.push(this.crearEjercicio('Variación Peso Muerto', [], ['x8','x8','x8'], marcas.pesoMuerto));
        listaEjerciciosDia3.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia3.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));

      dia3.ejercicios = listaEjerciciosDia3;
      listaDias.push(dia3);

      var dia4: DiaModel = new DiaModel;
      dia4.fechaDia = this.sumarDias(marcas.fechaInicio, 11);
      //Idéntico al dia 2
      dia4.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia4);

      var dia5: DiaModel = new DiaModel;
      dia5.fechaDia = this.sumarDias(marcas.fechaInicio, 13);
      var listaEjerciciosDia5 = new Array<EjercicioModel>();
        listaEjerciciosDia5.push(this.crearEjercicio('Press Banca', [83], ['MR'], marcas.pressBanca));
        listaEjerciciosDia5.push(this.crearEjercicio(marcas.espalda1, [], ['x10','x8','x8'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x10','x8','x6'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio(marcas.espalda2, [], ['x10','x8','x6'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia5.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
        dia5.ejercicios = listaEjerciciosDia5;
      listaDias.push(dia5);
      
      semana2.dias = listaDias;

      return semana2;
  }

  crearSemana3 = (marcas: MarcasModel) => {
    
    var semana3: SemanaModel = new SemanaModel;
    semana3.descripcion = "Max-OT";
    
      var listaDias = new Array<DiaModel>();

      var dia1: DiaModel = new DiaModel;
      dia1.fechaDia = this.sumarDias(marcas.fechaInicio, 14);

      var listaEjerciciosDia1 = new Array<EjercicioModel>();
        listaEjerciciosDia1.push(this.crearEjercicio('Sentadilla', [85, 85, 85], ['x4-6','x4-6','x4-6'], marcas.sentadilla));
        listaEjerciciosDia1.push(this.crearEjercicio('Peso Muerto', [87, 87], ['x3-6', 'x3-6'], marcas.pesoMuerto));

      dia1.ejercicios = listaEjerciciosDia1;
      listaDias.push(dia1);

      var dia2: DiaModel = new DiaModel;
      dia2.fechaDia = this.sumarDias(marcas.fechaInicio, 16);
      var listaEjerciciosDia2 = new Array<EjercicioModel>();
        listaEjerciciosDia2.push(this.crearEjercicio('Press Banca', [85,85,85], ['x4-6','x4-6','x4-6'], marcas.pressBanca));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda1, [], ['x6','x6','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x6','x6','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda2, [], ['x6','x6','x6'], 0));
      dia2.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia2);

      var dia3: DiaModel = new DiaModel;
      dia3.fechaDia = this.sumarDias(marcas.fechaInicio, 18);
      var listaEjerciciosDia3 = new Array<EjercicioModel>();
        listaEjerciciosDia3.push(this.crearEjercicio('Sentadilla', [88], ['x4-6'], marcas.sentadilla));
        listaEjerciciosDia3.push(this.crearEjercicio('Peso Muerto', [], ['x8'], marcas.pesoMuerto));
      dia3.ejercicios = listaEjerciciosDia3;
      listaDias.push(dia3);

      var dia4: DiaModel = new DiaModel;
      dia4.fechaDia = this.sumarDias(marcas.fechaInicio, 19);
      var listaEjerciciosDia4 = new Array<EjercicioModel>();
        listaEjerciciosDia4.push(this.crearEjercicio('Press Banca', [90,90,90], ['x4-6','x4-6','x4-6'], marcas.pressBanca));
        listaEjerciciosDia4.push(this.crearEjercicio(marcas.espalda1, [], ['x6','x6','x6'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x6','x6','x6'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio(marcas.espalda2, [], ['x6','x6','x6'], 0));
      dia4.ejercicios = listaEjerciciosDia4;
      listaDias.push(dia4);
      
      semana3.dias = listaDias;

      return semana3;
  }

  crearSemana4 = (marcas: MarcasModel) => {
    
    var semana4: SemanaModel = new SemanaModel;
    semana4.descripcion = "Aclimatación a altas cargas";
    
      var listaDias = new Array<DiaModel>();

      var dia1: DiaModel = new DiaModel;
      dia1.fechaDia = this.sumarDias(marcas.fechaInicio, 21);

      var listaEjerciciosDia1 = new Array<EjercicioModel>();
        listaEjerciciosDia1.push(this.crearEjercicio('Sentadilla', [87, 90, 93], ['x3','x3','x3'], marcas.sentadilla));
        listaEjerciciosDia1.push(this.crearEjercicio('Peso Muerto', [], ['x6', 'x6'], marcas.pesoMuerto));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));

      dia1.ejercicios = listaEjerciciosDia1;
      listaDias.push(dia1);

      var dia2: DiaModel = new DiaModel;
      dia2.fechaDia = this.sumarDias(marcas.fechaInicio, 22);
      var listaEjerciciosDia2 = new Array<EjercicioModel>();
        listaEjerciciosDia2.push(this.crearEjercicio('Press Banca', [87,90,92], ['x3','x3','x3'], marcas.pressBanca));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda1, [], ['x10','x10','x8','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda2, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12','x8-12'], 0));
      dia2.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia2);

      var dia3: DiaModel = new DiaModel;
      dia3.fechaDia = this.sumarDias(marcas.fechaInicio, 24);
      var listaEjerciciosDia3 = new Array<EjercicioModel>();
        listaEjerciciosDia3.push(this.crearEjercicio('Sentadilla', [92, 95], ['x3','x1-2'], marcas.sentadilla));
        listaEjerciciosDia3.push(this.crearEjercicio('Peso Muerto', [92, 95], ['x3','x1-2'], marcas.pesoMuerto));
        listaEjerciciosDia3.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia3.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia3.ejercicios = listaEjerciciosDia3;
      listaDias.push(dia3);

      var dia4: DiaModel = new DiaModel;
      dia4.fechaDia = this.sumarDias(marcas.fechaInicio, 25);
      var listaEjerciciosDia4 = new Array<EjercicioModel>();
        listaEjerciciosDia4.push(this.crearEjercicio('Press Banca', [87,90,95], ['x3','x2-4','x1-2'], marcas.pressBanca));
        listaEjerciciosDia4.push(this.crearEjercicio(marcas.espalda1, [], ['x10','x10','x8','x6'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio(marcas.espalda2, [], ['x12','x12','x10','x8'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia4.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia4.ejercicios = listaEjerciciosDia4;
      listaDias.push(dia4);
      
      semana4.dias = listaDias;

      return semana4;
  }

    crearSemana5 = (marcas: MarcasModel) => {
    
    var semana5: SemanaModel = new SemanaModel;
    semana5.descripcion = "Fuerza / Alta intensidad";
    
      var listaDias = new Array<DiaModel>();

      var dia1: DiaModel = new DiaModel;
      dia1.fechaDia = this.sumarDias(marcas.fechaInicio, 28);

      var listaEjerciciosDia1 = new Array<EjercicioModel>();
        listaEjerciciosDia1.push(this.crearEjercicio('Sentadilla', [97], ['x1-4'], marcas.sentadilla));
        listaEjerciciosDia1.push(this.crearEjercicio('Peso Muerto', [70, 73, 76], ['x4', 'x4', 'x2'], marcas.pesoMuerto));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional tren inferior', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia1.push(this.crearEjercicio('Opcional tren inferior', [], ['x8-12','x8-12','x8-12'], 0));

      dia1.ejercicios = listaEjerciciosDia1;
      listaDias.push(dia1);

      var dia2: DiaModel = new DiaModel;
      dia2.fechaDia = this.sumarDias(marcas.fechaInicio, 30);
      var listaEjerciciosDia2 = new Array<EjercicioModel>();
        listaEjerciciosDia2.push(this.crearEjercicio('Press Banca', [97], ['x1-4'], marcas.pressBanca));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda1, [], ['x8','x6','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.ejercicioHombro, [], ['x8','x6','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio(marcas.espalda2, [], ['x8','x6','x6'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 1', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia2.push(this.crearEjercicio('Opcional 2', [], ['x8-12','x8-12','x8-12'], 0));
      dia2.ejercicios = listaEjerciciosDia2;
      listaDias.push(dia2);

      var dia3: DiaModel = new DiaModel;
      dia3.fechaDia = this.sumarDias(marcas.fechaInicio, 32);
      var listaEjerciciosDia3 = new Array<EjercicioModel>();
        listaEjerciciosDia3.push(this.crearEjercicio('Peso Muerto', [97], ['x1-4'], marcas.pesoMuerto));
        listaEjerciciosDia3.push(this.crearEjercicio('Opcional tren inferior', [], ['x8-12','x8-12','x8-12'], 0));
        listaEjerciciosDia3.push(this.crearEjercicio('Opcional tren inferior', [], ['x8-12','x8-12','x8-12'], 0));
      dia3.ejercicios = listaEjerciciosDia3;
      listaDias.push(dia3);
      semana5.dias = listaDias;

      return semana5;
  }

  crearEjercicio = (nombreEjercicio: string, pesos: number[], reps: string[], maxima: number) => {
    var ejercicio: EjercicioModel = new EjercicioModel;
    var listaPesoReps = new Array<PesoRepsModel>();
    ejercicio.nombreEjercicio = nombreEjercicio;
    for (var i = 0; i < 4; i++) {
      var pesoReps: PesoRepsModel = new PesoRepsModel;
      if(null != pesos[i]){
        pesoReps.peso = this.calcularPeso(maxima, pesos[i]);
      }
      if(null != reps[i]){
        pesoReps.repeticiones = ' '+reps[i];
      }
      listaPesoReps.push(pesoReps);
    }
    ejercicio.pesoReps = listaPesoReps;
    return ejercicio;
  } 

  filaInformativa = (maximaSentadilla: number, numMensajeInfo: string) => {
    var ejercicio: EjercicioModel = new EjercicioModel;
    ejercicio.nombreEjercicio = 'colspan5';
    var listaPesoReps = new Array<PesoRepsModel>();
      var pesoReps: PesoRepsModel = new PesoRepsModel;
      pesoReps.peso = this.calcularPeso(maximaSentadilla, 5);
      pesoReps.repeticiones = numMensajeInfo;
    listaPesoReps.push(pesoReps);
    ejercicio.pesoReps = listaPesoReps;
    return ejercicio;
  } 

  sumarDias = (fecha: Date, d:number) => {
    var fechaFinal = new Date(fecha);
    fechaFinal.setDate( fechaFinal.getDate() + d );
    return fechaFinal;
  }

  calcularPeso(value: number, porcentaje: number): string {
    var calculo = (value * porcentaje) / 100;
    var pesoRedondeado = Math.round(calculo);
    return pesoRedondeado +'kg';
  }

}
