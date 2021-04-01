import { Injectable, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { loginUser, User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule} from '../app.module';



@Injectable({
  providedIn: 'root'
})


export class UserService{
  backgroundImage(){
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));}


   newUser : User ={
      username:'',
      email:'',
      password:'',
      contact:'',
      address:'',
  }


  existingUser:loginUser={
    email:'',
    password:''
  }

  // ngOnInit() {
  //   this.backgroundImage();
  // }
  constructor(private http:HttpClient) { }
  googleAuthentication()
  {
   return this.http.get(environment.apiBaseUrl + 'auth/google');
  }
  addNewUser(user:User)
  {
   return this.http.post(environment.apiBaseUrl + 'newUser',user);
  }

  loginUser(verifyUser:loginUser)
  {
   return this.http.post(environment.apiBaseUrl+'auth',verifyUser);
  }

  getselectedUser(id:string)
  {
    return this.http.get(environment.apiBaseUrl+ 'SelectUser/'+id);
  }


  //store token variables
  setToken(token:string)
  {
    localStorage.setItem('token',token);
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  removeToken()
  {
    localStorage.removeItem('token');
  }


  //user id stroage

  setUserId(id:string)
  {
    localStorage.setItem('userid',id);
  }

  //Token verification

  getPayload()
  {
    var token=JSON.stringify(this.getToken());
    var userPayload=atob(token.split('.')[1]);
    if(userPayload)
    {
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }

  }

  isLoggedIn()
  {
    var userpayload=this.getPayload();
    if(userpayload)
    {
      return userpayload.exp>Date.now()/1000;
    }
    else
    {
      return null;
    }
  }



}





