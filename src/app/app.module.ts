import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment as env} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { MarcasComponent } from './components/marcas/marcas.component';

import { AuthModule } from './auth/auth.module';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ng2-tooltip-directive-ng13fix';

import { CalculoPesoPipe } from './pipes/calculo-peso.pipe';
import { LibretaComponent } from './components/libreta/libreta.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProgramaComponent,
    MarcasComponent,
    CalculoPesoPipe,
    LibretaComponent,
    PerfilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AuthModule,
    SpinnerModule,
    ToastrModule.forRoot(),
  ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
