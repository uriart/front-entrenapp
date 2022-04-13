import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {environment as env} from '../environments/environment';
registerLocaleData(localeEs, 'es');

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

import { CalculoPesoPipe } from './pipes/calculo-peso.pipe';
import { LibretaComponent } from './components/libreta/libreta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProgramaComponent,
    MarcasComponent,
    CalculoPesoPipe,
    LibretaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [ `${env.dev.apiUrl}/powerlifting/program` ]
      }
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
