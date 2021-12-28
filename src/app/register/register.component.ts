import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg:string="";
  prop:string='';
  mess:string='';
  constructor() { }
  
  ngOnInit(): void {
  }
  login(value: any){

  if(value.emailid == "hanu@gmail.com" && value.password == "12345"){
  this.mess=`Successfully Registered`;
  this.prop=`#006400`;
  }
  else {
  this.mess=`Register not succesful`;
  this.prop=`red`;
  }
  console.log(value.emailid);
  console.log(value.password);
  }
  
  
  }
