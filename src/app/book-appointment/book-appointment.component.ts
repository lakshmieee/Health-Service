import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
 
bookAppointment = new FormGroup({
  patientName : new FormControl('',Validators.required),
  patientDob : new FormControl('',Validators.required),
  patientMedIssue : new FormControl('',Validators.required),
  hospitalName : new FormControl('',Validators.required),
  visitDate : new FormControl('',Validators.required),
  email : new FormControl('',Validators.required),
  mobileNumber : new FormControl('',Validators.required),
})

 constructor(private rou:Router){}
 
  ngOnInit(): void {
    
  }

  showDetails(){
 console.log(this.bookAppointment.value);
 this.bookAppointment.reset();
  }


}
