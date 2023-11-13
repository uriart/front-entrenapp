import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
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
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create navbar component', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
