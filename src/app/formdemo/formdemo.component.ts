import { Component, OnInit } from '@angular/core';
import {Registration} from './Registration';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss']
})
export class FormdemoComponent implements OnInit {


  hobbies = ['Cricket', 'Singing',
            'Writing', 'Reading'];
         userRegistration=new Registration(
           1,'nirali','shah','','',this.hobbies[0]);



  constructor() { }

  ngOnInit() {

  }
  submitted = false;
hidden=false;
pass:string;
confirmPass:string;
final:string;
  onSubmit(fm:NgForm) {
     this.submitted = true;
     //debugger;
  console.log(fm);
 }
 onHidden()
 {
   console.log("hidden");
   this.hidden=true;
   
 }

 checkpassword(cp:NgForm)
 {
   this.final="";
   console.log("check");
  
  
this.pass=cp.control.value.password;
this.confirmPass=cp.control.value.confirmPassword;
console.log( "password"+this.pass);
console.log("confirm paass" + this.confirmPass);
    if((this.pass!==this.confirmPass))
    {
      console.log("pls same password ");
    

      this.final="password must be same";
     
    }
   
    
 }
 
 
}
