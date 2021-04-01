import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
googleauth(){
  this.userservice.googleAuthentication();
  alert("google");
}


  type= "password";
  vis="visibility_off";
  users={
    email:'',
    password:'',
  }
   submitted=false;


  myImage:string="assets/images/bgimage.jpg"
  constructor(
    private  authservice:AuthService,
    public userservice:UserService,
    private router:Router) { }

  showmessage=false;
  errorMessage=false;

  resData:any=[];
  error:string='';
  id!:string;

    ngOnInit(): void {
  }

  login(f:NgForm)
  {
    console.log(f.value);
    this.userservice.loginUser(f.value).subscribe((res)=>{
      console.log(res);
      this.resData = res;
      // console.log(this.resData.token);
      this.userservice.setToken(this.resData.token);
      this.id=this.resData.data._id;
      // this.router.navigateByUrl('/profile');
      this.router.navigate(['/profile'],{"queryParams":{id:this.id}})

this.showmessage=true;
    },
    (err)=>{
      this.errorMessage=true;
      this.error=err;
      console.log(err);
    })
  }
 visible(){
   this.type=(this.type=='password'?"email":"password");
   this.vis=(this.vis=='visibility_off'?"visibility":"visibility_off");
 }
 getValues(f:NgForm){

  if(f.valid)
  {
    console.log(f.value);
  }

  this.authservice.logIn(f.value.username);
}

}

