import { Component, OnInit } from '@angular/core';
import {Registration} from './Registration';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss']
})
export class FormdemoComponent implements OnInit {


  cities = ['jamnagar', 'Rajkot',
            'surat', 'porbander'];
         userRegistration=new Registration(
           1,'nirali','shah','','',this.cities[0]);



  constructor() { }
  
  ngOnInit() {
    
  }
  submitted = false;
hidden=false;
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

}
