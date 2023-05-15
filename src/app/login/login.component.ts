import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  

 public loginForm = new FormGroup({
    email:new FormControl<string>('',[Validators.required,Validators.email]),
    password:new FormControl<string>('',Validators.minLength(8))
  })

  
  constructor(private auth:AuthService){}

 public login(){
    const email = this.loginForm.controls.email.value ?? '';
    const password = this.loginForm.controls.password.value ?? '';
   this.auth.login(email,password);
 
}
}
