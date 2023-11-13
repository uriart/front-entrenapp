import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
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
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create footer component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
