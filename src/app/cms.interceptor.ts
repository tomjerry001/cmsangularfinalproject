import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CmsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("I am Intercepting...");

    //if login , no need to check to check JWT
    if(request.url.includes('logins/')){
      console.log("Not checking JWT");

    }
    //else Get JWT
    else{
      let token=localStorage.getItem('JWT_Token');
      //checking AccessRole and JWT Token
      if(localStorage.getItem('AccessRole')&&
      (localStorage.getItem('JWT_Token'))){

        //if JWT is there --send next.handle
        const newRequest= request.clone(
          {
            setHeaders:{
              Authorization:`Bearer ${token}`
           }
          }
        );
        return next.handle(newRequest);
      }
    }
    return next.handle(request);
  }
 
}
