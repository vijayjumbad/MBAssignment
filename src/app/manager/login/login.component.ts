import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginService:ManagerService) {

    
  }

  
  

  onSubmit(f: NgForm) {
    const logObserver = {
      next: x => console.log('login sucessesful: '),
      error: err => console.error(err),
    };
    this.loginService.login(f.value).subscribe(logObserver);
  }

}
