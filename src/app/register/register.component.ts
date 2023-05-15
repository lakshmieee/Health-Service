import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth:AuthService){}
  regForm = new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.minLength(8))
  })

  register(){
    const email = this.regForm.controls.email.value ?? '';
    const password = this.regForm.controls.password.value ?? '';
   this.auth.register(email,password);
  }
}
