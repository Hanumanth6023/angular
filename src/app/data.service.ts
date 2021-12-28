import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message:any[]=[];
 
  constructor(private log:LogService) { }

  dataServe(msg:any): void{
    this.message.push(msg);
    
   }
 

  callData():any
  {

    return this.message;
  
  }
}

