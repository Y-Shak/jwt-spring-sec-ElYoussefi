import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode : number =0;
  constructor(private authService : AuthentificationService, private router :Router) { }

  ngOnInit(): void {
  }

  onLogin(f : NgForm){
    this.authService.login(f.value)
    .subscribe(response =>{
      // je recuepere le token depuis la reponse retournée
      let jwtToken = response.headers.get('Authorization');
        
        // j'enregistre le token dans le local storage 
        this.authService.saveToken(jwtToken!);
        // je fais une redirection si tous est ok 
        this.router.navigateByUrl("/tasks");
      }, err => {
          console.log(err);
          this.mode= 1;
      })
  }
}
