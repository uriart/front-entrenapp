import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { NotasService } from 'src/app/services/notas.service';
import { environment } from '../../../environments/environment';
import { LibretaComponent } from './libreta.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('LibretaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        AuthModule.forRoot({
          domain: environment.auth.domain,
          clientId: environment.auth.clientId,
        }),
      ],
      declarations: [
        LibretaComponent
      ],
      providers: [
        NotasService
      ]
    }).compileComponents();
  });

  it('should create libreta component', () => {
    const fixture = TestBed.createComponent(LibretaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be created NotasService', () => {
    const service: NotasService = TestBed.get(NotasService);
    expect(service).toBeTruthy();
   });

   it('should have getNotas function', () => {
    const service: NotasService = TestBed.get(NotasService);
    expect(service.getNotas).toBeTruthy();
   });

});
