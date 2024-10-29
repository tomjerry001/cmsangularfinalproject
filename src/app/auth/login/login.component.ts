import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Declare variables
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  error: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  // Life Cyle Hook
  ngOnInit(): void {
    // Create Reactive Form
    this.loginForm = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }
  //Get all controls from LoginForm for Validations - Custom Method
  get formControls() {
    return this.loginForm.controls;
  }

  //Functionality
  loginCredentials(): void {
    // Setting the value for isSubmitted
    this.isSubmitted = true;
    // Checking Form, if it is INVALID
    if (this.loginForm.invalid) {
      this.error = 'Please enter User Name and Password';
      return;
    }
    // Checking Form, if it is VALID
    if (this.loginForm.valid) {
      this.error = '';
      console.log(this.loginForm.value);
      // Checking the Login Credentials
      this.authService.loginVerify(this.loginForm.value)
        .subscribe(
          (response) => {
            console.log(response);
            console.log(response.roleId);
            
            //Implement the process for Role based 

            if(response ==null){
              this.error ="Invalid UserName and password";
            }

            if(response.roleId ===1){
              //Admin Dashboard
              localStorage.setItem("UserName",response.Username);
              sessionStorage.setItem("UserName",response.Username);
              localStorage.setItem("AccessRole",response.roleId.toString());
              localStorage.setItem("JWT_Token",response.token);
              
              this.router.navigate(['auth/admin']);
            }
            else if(response.roleId ===2){
              //Manager Dashboard
              this.router.navigate(['auth/receptionist']);
            }
            else if(response.roleId ===3){
              //Manager Dashboard
              this.router.navigate(['auth/doctor']);
            }
            else if(response.roleId ===4){
              //Manager Dashboard
              this.router.navigate(['auth/pharmacist']);
            }
            else if(response.roleId ===5){
              //Manager Dashboard
              this.router.navigate(['auth/labtechnician']);
            }
            else{
              this.error="Sorry! Invalid credentials";
            }
          },
          (error) => {
            this.error = "Invalid Username and password";
          }
        )
    }
  }
}