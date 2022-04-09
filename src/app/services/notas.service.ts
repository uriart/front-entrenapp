import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private url = 'https://prueba-71332-default-rtdb.europe-west1.firebasedatabase.app';

  constructor( private http: HttpClient ) { }

  getNotas(idUsuario: string){
    return this.http.get(`${ this.url }/users/${ idUsuario }/notas.json`);
  }

  nuevaNota(notas: string[], idUsuario: string){
    notas.push("");
    return this.http.put(`${ this.url }/users/${ idUsuario }/notas.json` , notas);
  }

}
