import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '../../auth/auth.module';
import { SpinnerComponent } from './spinner.component';

describe('AppComponent', () => {

  it('should create home component', () => {
    const fixture = TestBed.createComponent(SpinnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
