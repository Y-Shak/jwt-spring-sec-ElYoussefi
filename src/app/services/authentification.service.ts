import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  
  private host : string = "http://localhost:8080";
  private jwtToken : string | null=null;
  // private roles! : Array<any>;
  private roles : Array<any> =[] ;


  constructor(private http : HttpClient) { }
  login(user :any ){
    return this.http.post(this.host+"/login",user, {observe:'response'} );
  }
  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }
  saveToken(jwtToken: string ) {
    let jwtHelper =new JwtHelperService();
    localStorage.setItem('token',jwtToken);
    this.roles = jwtHelper.decodeToken(jwtToken).roles;
    console.log(this.roles);   
  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }
  isAdmin(){
    for(let r of this.roles){
      if(r!.authority == 'ADMIN') return true;
    }
    return false;
  }

  getTasks(){
    // il faut envoyer le token 
    if(this.jwtToken == null) this.loadToken();
    return this.http.get(this.host+"/tasks",{headers:new HttpHeaders({'Authorization' : this.jwtToken!})});

  }
  

  saveTask(task: any) {
    if(this.jwtToken == null) this.loadToken();
    return this.http.post(this.host+"/tasks",task,{headers:new HttpHeaders({'Authorization' : this.jwtToken!})});
  }
}
