import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import authConf from '../../../../auth_config.json';
import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AuthModule.forRoot({
          domain: authConf.domain,
          clientId: authConf.clientId,
        }),
      ],
      declarations: [
        PerfilComponent
      ],
    }).compileComponents();
  });

  it('should create perfil component', () => {
    const fixture = TestBed.createComponent(PerfilComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
