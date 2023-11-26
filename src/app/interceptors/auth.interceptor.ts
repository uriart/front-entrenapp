import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import * as Session from "supertokens-auth-react/recipe/session";
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return from(Session.getAccessToken()).pipe(
      switchMap((token) => {
        console.log(token);
        if (token) {
          const requestWithToken = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(requestWithToken);
        } else {
          return next.handle(req);
        }
      })
    );
    
  }

}
