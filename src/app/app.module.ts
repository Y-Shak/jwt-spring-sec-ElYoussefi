import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from './services/authentification.service';

const route :Routes = [
  { path: 'login', component : LoginComponent},
  { path: 'tasks', component : TasksComponent},
  { path: 'new-task', component : NewTaskComponent},
  { path: 'register', component : RegistrationComponent},
  { path: '', redirectTo : '/login',pathMatch : 'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
    // RouterModule.forRoot(route)
  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
