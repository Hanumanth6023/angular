import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
  prop:string='';
  mess:string='';
  constructor() { }
  
  ngOnInit(): void {
  }
  login(value: any){

  if(value.emailid == "hanu@gmail.com" && value.password == "12345"){
  this.mess=`Successfully logged in`;
  this.prop=`#006400`;
  }
  else {
  this.mess=`login not succesful`;
  this.prop=`red`;
  }
  console.log(value.emailid);
  console.log(value.password);
  }
  
  
  }
