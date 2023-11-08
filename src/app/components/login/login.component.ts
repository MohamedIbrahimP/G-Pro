import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentDay:any=''
  currentMonth:any=''
  submitted:boolean=false
  /**
   *
   */
  constructor() {  }

  logInForm=new FormGroup({
    userName :new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  })


get getUserName(){
  return this.logInForm.controls['userName'];
}
get getPassword(){
  return this.logInForm.controls['password'];
}





submit(e:Event){
e.preventDefault();
this.submitted=true;
console.log(this.logInForm);



}





ngOnInit(){
  const currentDate = new Date();
  this.currentDay = currentDate.getDate();
  this.currentMonth = currentDate.toLocaleString('en-US', { month: 'short' });
  
  



}






}
