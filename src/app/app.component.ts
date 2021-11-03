import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwt-spring-sec-ElYoussefi';

  constructor(private authService : AuthentificationService, private router:Router){}
  onLogout(){
  this.authService.logout();
  this.router.navigateByUrl("/login");
  }
}
