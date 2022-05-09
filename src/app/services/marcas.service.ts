import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarcasModel } from '../models/marcas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor( private http: HttpClient ) { }

  crearMarcas( marcas: MarcasModel , idUsuario: string): Observable<MarcasModel> {
    marcas.usuario = idUsuario;
    return this.http.post<MarcasModel>(`${ environment.dev.apiUrl }/powerlifting/marcas`, marcas);
  }

  getMarcas(idUsuario: string): Observable<MarcasModel> {
    return this.http.get<MarcasModel>(`${ environment.dev.apiUrl }/powerlifting/marcas?user=${idUsuario}`);
  }


}
