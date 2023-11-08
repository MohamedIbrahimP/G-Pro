import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  submitted:boolean=false
  
  generalSettingsForm=new FormGroup({
    addition:new FormControl('',[Validators.required]),
    debit:new FormControl('',[Validators.required]),
    firstDay:new FormControl('',[Validators.required]),
    secondDay:new FormControl('',[]),
  })
  
 get getAddition(){
    return this.generalSettingsForm.controls['addition'];
  }
  get getDebit(){
    return this.generalSettingsForm.controls['debit'];
  }
  get getFirstDay(){
    return this.generalSettingsForm.controls['firstDay'];
  }
  get getSecondDay(){
    return this.generalSettingsForm.controls['secondDay'];
  }
 
 
 
 
 
submit(e:Event){
  e.preventDefault();
  this.submitted=true
console.log(this.generalSettingsForm);

 }
  
  
  
  
  
  
  
  ngOnInit(): void {
   
  }













}
