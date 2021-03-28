import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarcasModel } from '../models/marcas.model';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private url = 'https://prueba-71332-default-rtdb.europe-west1.firebasedatabase.app';

  constructor( private http: HttpClient ) { }

  crearMarcas( marcas: MarcasModel , idUsuario: string) {
    return this.http.put(`${ this.url }/users/${ idUsuario }/marcas.json`, marcas);
  }

  getMarcas(idUsuario: string){
    return this.http.get(`${ this.url }/users/${ idUsuario }/marcas.json`);
  }


}
