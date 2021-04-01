import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { MarcasComponent } from './components/marcas/marcas.component';

import { AuthModule } from '@auth0/auth0-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';
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
    TooltipModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-r071w8pk.eu.auth0.com',
      clientId: '1oVAezqLX77ftKY3aKHX3Cr86ag2guga',
      redirectUri: window.location.origin + 'https://uriart.github.io/programa-powerlifting/',
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
