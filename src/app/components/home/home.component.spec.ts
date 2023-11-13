import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
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
        HomeComponent
      ],
    }).compileComponents();
  });

  it('should create home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
