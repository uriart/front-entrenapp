import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { ToastrModule } from 'ngx-toastr';
import { MarcasService } from 'src/app/services/marcas.service';
import { ProgramacionesService } from 'src/app/services/programaciones.service';
import { environment } from '../../../environments/environment';
import { ProgramaComponent } from './programa.component';

describe('ProgramaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        AuthModule.forRoot({
          domain: environment.auth.domain,
          clientId: environment.auth.clientId,
        }),
      ],
      declarations: [
        ProgramaComponent
      ],
      providers: [
        ProgramacionesService,
        MarcasService
      ]
    }).compileComponents();
  });

  it('should create programa component', () => {
    const fixture = TestBed.createComponent(ProgramaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be created ProgramacionesService', () => {
    const service: ProgramacionesService = TestBed.get(ProgramacionesService);
    expect(service).toBeTruthy();
   });

   it('should have obtenerProgramacionCandito function', () => {
    const service: ProgramacionesService = TestBed.get(ProgramacionesService);
    expect(service.obtenerProgramacionCandito).toBeTruthy();
   });

});
