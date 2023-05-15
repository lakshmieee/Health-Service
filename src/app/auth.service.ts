import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router, private fireauth:AngularFireAuth) { }

  login(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
localStorage.setItem('token','true');
this.route.navigate(['/book-appointment']);
    }, err =>{
alert('Something went wrong');
this.route.navigate(['/login']);
    })
  }

  register(email:string, password:string){
this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
  alert('Registration successful')
this.route.navigate(['/login']);
}, err =>{
alert(err.message);
this.route.navigate(['/register']);
})
  }


  logout(){
    this.fireauth.signOut().then(()=>{
localStorage.removeItem('token');
this.route.navigate(['login']);
    }, err =>{
alert(err.message);
    })
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
}


