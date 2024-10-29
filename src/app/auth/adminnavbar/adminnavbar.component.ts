import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.scss']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout(); // Call the logout method in your AuthService
    this.router.navigate(['/login']); // Redirect to the login page
  }

  ngOnInit(): void {
    //this.user = localStorage.getItem("UserName").toString();
  }
// LogOut()
logOut(){
  this.authService.logOutRemoveItems();
}
  }


