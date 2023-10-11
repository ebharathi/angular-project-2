import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usernameerror:string='';
  useremailerror:string='';
  userpasssworderror:string='';

  password?:string;
  onNameChange(name?:string)
  {
    console.log("name-->",name);
    if(name?.includes("@"))
      this.usernameerror="Username is invalid";
    else
      this.usernameerror="";
  }
  onEmailChange(email?:string)
  {
    console.log("Email-->",email);
  }
  onPasswordChange(password?:string)
  {
    console.log("password--->",password);
    this.password=password;
  }
  onConfirmPassword(cpass?:string)
  {
    if(cpass!=this.password)
      this.userpasssworderror="Password doesn't match";
    else
      this.userpasssworderror="";
  }
}
