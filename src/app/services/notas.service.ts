import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Nota } from '../models/nota.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor( private http: HttpClient ) { }

  getNotas(idUsuario: string){
    return this.http.get<Nota[]>(`${ environment.dev.apiUrl }/powerlifting/getNotesByUser?user=${idUsuario}`);
  }

  deleteNotaById(idNota: number){
    return this.http.delete(`${ environment.dev.apiUrl }/powerlifting/deleteNota?id=${idNota}`);
  }

  guardarNota(notaObj: Nota){
    return this.http.post<Nota>(`${ environment.dev.apiUrl }/powerlifting/saveNota`, notaObj);
  }

}
