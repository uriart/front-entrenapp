import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AuthModule.forRoot({
          domain: environment.auth.domain,
          clientId: environment.auth.clientId,
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
