import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import authConf from '../../../../auth_config.json';
import { MarcasComponent } from './marcas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarcasService } from 'src/app/services/marcas.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('MarcasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ToastrModule.forRoot(),
        AuthModule.forRoot({
          domain: authConf.domain,
          clientId: authConf.clientId,
        }),
      ],
      declarations: [
        MarcasComponent
      ],
      providers: [
        MarcasService
      ]
    }).compileComponents();
  });

  it('should create marcas component', () => {
    const fixture = TestBed.createComponent(MarcasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be created MarcasService', () => {
    const service: MarcasService = TestBed.get(MarcasService);
    expect(service).toBeTruthy();
   });

   it('should have getMarcas function', () => {
    const service: MarcasService = TestBed.get(MarcasService);
    expect(service.getMarcas).toBeTruthy();
   });

   it('should be created ToastrService', () => {
    const service: ToastrService = TestBed.get(ToastrService);
    expect(service).toBeTruthy();
   });

});
