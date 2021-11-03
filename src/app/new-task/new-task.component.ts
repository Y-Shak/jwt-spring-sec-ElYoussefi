import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  mode : number = -1;
  task : any = null;
  constructor(private authService : AuthentificationService, private router : Router) { }

  ngOnInit(): void {
    
    if(!this.authService.isAdmin()){  
      this.mode = 0;
      console.log('isAdmin : '+this.authService.isAdmin());  
    }
        // this.router.navigateByUrl("/tasks");
  }
  onSaveTask(f : NgForm){
    // if(!this.authService.isAdmin())
    //   this.mode = 0;
    this.authService.saveTask(f.value)
      .subscribe(
        response =>{
          this.task = response;
          this.mode = 2;
        },err =>{
          this.mode=1;
        }
      );
  }

}
