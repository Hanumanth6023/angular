import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit,DoCheck{

  msg:any=[];


  constructor(private data :DataService)
   {

      
   }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.msg=this.data.callData();
      
  }

  send(msg:any) : void
  {
   
   this.msg=this.data.dataServe("Hanumanth :" + msg);
  }

}
