import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProgramaPowerliftingModel } from '../models/candito.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionesService {

  url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  obtenerProgramacionCandito(idUsuario: string): Observable<ProgramaPowerliftingModel> {
    return this.httpClient.get<ProgramaPowerliftingModel>(this.url + 'powerlifting/program?user=USER4');
  }

}
