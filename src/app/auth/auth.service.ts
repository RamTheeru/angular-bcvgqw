import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {
token : string;
  constructor(private router:Router) { }
signUpUser(email : string,password : string){
firebase.auth().createUserWithEmailAndPassword(email,password)
.catch(
  error => console.log(error)
);
}
signInuser(email : string,password : string){
  firebase.auth().signInWithEmailAndPassword(email,password)
  .then(
    response=>{
      this.router.navigate(['/']);
      firebase.auth().currentUser.getToken()
      .then(
        (token:string)=>this.token=token
      )
    }
  )
  .catch(
  error => console.log(error)
);
}
getToken(){
  firebase.auth().currentUser
  .getToken().then(
        (token:string)=>this.token=token
      );
      return this.token;
}
isAuth(){
  return this.token !=null;
}
logout(){
  firebase.auth().signOut();
  this.token=null;
}
}