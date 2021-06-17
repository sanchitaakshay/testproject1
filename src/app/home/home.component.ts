import { Component, Input,Output,OnInit,EventEmitter,ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
// import { Profile } from '../interfaces/profile';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
//@Input('details') details:any[];
//@Output() addDetails=new EventEmitter<any>();
      
      parentDetails:any[]=[];


  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) 
  { 

  }

 

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
      }
    }
  }
  

  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
  });
}
addDetails(){
  this.parentDetails.push(this.registerForm.value);
//console.log(this.registerForm.value);
}
// convenience getter for easy access to form fields
get f() 
{
   return this.registerForm.controls; 
  }
onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  if(this.submitted)
  {
    this.showModal = false;
  }
 
}
childEvent(data){
alert(data);
}
  }


 