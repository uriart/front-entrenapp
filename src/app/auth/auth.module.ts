import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as Session from "supertokens-auth-react/recipe/session";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})

export class AuthModule implements CanActivate{

  constructor(private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean >  {
    if(! await Session.doesSessionExist()) {
      await this.router.navigate(['/auth'])
      return false
    }
    return true
  }
}
