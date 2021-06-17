import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
//import {FromGroup} from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  //childDetails:Array<any> = [{firstname: 'Sanoj Kumar Amat',address: 'Ambernath'}];
@Input() childDetails:any[]=[];
@Output() passedEvent=new EventEmitter();  
data:string='Child Data';
constructor() { }

  ngOnInit(){
  }

  // newDetails(event:any){
  //   this.detailsList.push(event);

  // }
  PassEvent(){
this.passedEvent.emit(this.data);
  }

}
