import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent, SignupComponent]
  
})
export class ManagerModule { }
