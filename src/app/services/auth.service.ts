import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../shared/login';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,
    private router:Router
  ) { }



  //verify username and password
  public loginVerify(login:Login):Observable<any> {

    //call rest api for checking username nad password
    //https://localhost:7257/api/Logins/Reshmi/Reshmi@123
    //<User> -- return type
    return this.httpClient.get<Login>(environment.apiUrl + 'Logins/' + login.Username +'/' + login.Password);
  }
  register(login: Login): Observable<any> {
    return this.httpClient.get<Login>(environment.apiUrl + 'Logins/' + login.Username +'/' + login.Password);
  }

  //logout 
  logout() {
    localStorage.removeItem('token'); // Adjust based on how you store your token
    // Any additional cleanup if necessary
  }
  public logOutRemoveItems(){
    //claer all session and local storage keys
    localStorage.removeItem("UserName");
    sessionStorage.removeItem("UserName");
    localStorage.removeItem("AccessRole");
    localStorage.removeItem("JWT_Token");


    //rredirec tro login
    this.router.navigate(['auth/login']);



  }
}