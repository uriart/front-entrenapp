import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { LibretaComponent } from './components/libreta/libreta.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'marcas', 
    component: MarcasComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'programa', 
    component: ProgramaComponent,
    canActivate: [ AuthGuard ]
  },
  { 
    path: 'libreta', 
    component: LibretaComponent,
    canActivate: [ AuthGuard ]
  },  
  { 
    path: 'perfil', 
    component: PerfilComponent,
    canActivate: [ AuthGuard ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
