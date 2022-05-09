import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProgramaPowerliftingModel } from '../models/candito.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionesService {

  constructor(private httpClient: HttpClient) { }

  obtenerProgramacionCandito(idUsuario: string): Observable<ProgramaPowerliftingModel> {
    return this.httpClient.get<ProgramaPowerliftingModel>( `${environment.dev.apiUrl}/powerlifting/program?user=${idUsuario}` );
  }

}
