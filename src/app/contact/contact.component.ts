import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

contactDetails =new FormGroup({
name :new FormControl('',Validators.required),
email :new FormControl('',Validators.email),
subject :new FormControl('',Validators.required),
comments :new FormControl('',Validators.maxLength(500)),
})

  showDetails(){
    console.log(this.contactDetails.value);
  }
}
