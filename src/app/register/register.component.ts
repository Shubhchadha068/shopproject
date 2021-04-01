import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  // users={
  //   email:'',
  //   password:'',
  //   username:'',
  //   contact:'',
  //   address:'',
  // }
   submitted=false;
  type= "password";
  vis="visibility_off";
  constructor(private router:Router,
    public userservice:UserService) {

  }
  visible(){
    this.type=(this.type=='password'?"email":"password");
    this.vis=(this.vis=='visibility_off'?"visibility":"visibility_off");
  }
  getValues(f:NgForm){

    if(f.valid)
    {
      console.log(f.value);
      this.userservice.addNewUser(f.value).subscribe((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
     // this.router.navigateByUrl('');

    }}

    // else
    // {
    //   return;
    // }

    // this.authservice.logIn(f.value.username);
  }













