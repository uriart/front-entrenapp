import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { LibretaComponent } from './components/libreta/libreta.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'marcas', 
    component: MarcasComponent,
    canActivate: [AuthModule] 
  },
  { 
    path: 'programa', 
    component: ProgramaComponent,
    canActivate: [ AuthModule ]
  },
  { 
    path: 'libreta', 
    component: LibretaComponent,
    canActivate: [ AuthModule ]
  },  
  { 
    path: 'perfil', 
    component: PerfilComponent,
    canActivate: [ AuthModule ]
  },
  {
    path: "auth",
    component: AuthComponent,
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
