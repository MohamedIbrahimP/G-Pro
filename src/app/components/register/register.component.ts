import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


const phoneRegExp = /^(\+010-|\+012|\+011)?\d{11}$/;
const nationalIdRegExp = /^\d{14}$/

function minAgeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (today < new Date(birthDate.setFullYear(today.getFullYear()))) {
      age--;
    }

    if (age < 18) {
      return { minAge: true };
    }

    return null;
  };
}
function minContractValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const contractdate = new Date(control.value);
    const establishYear =2008;
    const contractYear=contractdate.getFullYear();

    if (contractYear < establishYear) {
      return { contractYear: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id:number=0
  submitted:boolean = false

/**
 *
 */
constructor(public ActivatedRoute:ActivatedRoute ) { }


  registerForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,]),
  lastName:new FormControl('',[Validators.required,]),
  address:new FormControl('',[Validators.required,]),
  phone:new FormControl('',[Validators.required,Validators.pattern(phoneRegExp)]),
  gender:new FormControl('',[Validators.required,]),
  nationality:new FormControl('',[Validators.required,]),
  birthDate: new FormControl('', [Validators.required,Validators.required, minAgeValidator()]),
  nationalId:new FormControl('',[Validators.required,Validators.pattern(nationalIdRegExp)]),

  contractDate: new FormControl('', [Validators.required,minContractValidator()]),
  salary: new FormControl('', [Validators.required,]),
  attendanceTime:new FormControl('',[Validators.required,]),
  departureTime:new FormControl('',[Validators.required,]),



})


get getFirstName(){
  return this.registerForm.controls['firstName'];
}
get getLastName(){
  return this.registerForm.controls['lastName'];
}
get getAddress(){
  return this.registerForm.controls['address'];
}
get getPhone(){
  return this.registerForm.controls['phone'];
}
get getGender(){
  return this.registerForm.controls['gender'];
}
get getNationality(){
  return this.registerForm.controls['nationality'];
}
get getBirthDate(){
  return this.registerForm.controls['birthDate'];
}
get getNationalId(){
  return this.registerForm.controls['nationalId'];
}
get getContractDate(){
  return this.registerForm.controls['contractDate'];
}
get getSalary(){
  return this.registerForm.controls['salary'];
}
get getAttendanceTime(){
  return this.registerForm.controls['attendanceTime'];
}
get getDepartureTime(){
  return this.registerForm.controls['departureTime'];
}



submit(e:Event){
  e.preventDefault();
  this.submitted = true;
  console.log(this.registerForm);

  console.log(this.getNationalId.errors);
  
}


ngOnInit() {
  this.id = this.ActivatedRoute.snapshot.params['id'];
console.log(this.id);



}


}
