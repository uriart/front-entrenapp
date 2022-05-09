import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment as env} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { MarcasComponent } from './components/marcas/marcas.component';

import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ng2-tooltip-directive';

import { CalculoPesoPipe } from './pipes/calculo-peso.pipe';
import { LibretaComponent } from './components/libreta/libreta.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProgramaComponent,
    MarcasComponent,
    CalculoPesoPipe,
    LibretaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [ `${env.dev.apiUrl}/powerlifting/*` ]
      }
    }),
    SpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
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
