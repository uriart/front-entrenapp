import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { SpinnerComponent } from './spinner.component';

describe('AppComponent', () => {
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
        SpinnerComponent
      ],
    }).compileComponents();
  });

  it('should create home component', () => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
