import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot):boolean {

      //checking surrent role and expected role
      //current rrole frm local storage 

      const currentRole=localStorage.getItem("AccessRole");

      const expectedRole=next.data.role;


      //if match => true,show the authorized page
      //else redirect to login paage

      if(currentRole !==expectedRole){
        localStorage.removeItem("UserName");
        sessionStorage.removeItem("UserName");
        localStorage.removeItem("AccessRole");
        localStorage.removeItem("JWT_Token");
        
        this.router.navigate(['auth/login']);
        return false;
      }
      return true;

    }
    
   
  }