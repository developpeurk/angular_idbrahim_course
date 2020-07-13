import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
contactMethods = [
                    {id: 1, name:'email'     },
                    {id: 2, name: 'telephone'},
                    {id: 3, name: 'sms'      }
                  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(value){
    console.log(value)
  }

  submit(f){
    console.log(f.value.contact.firstname);
    console.log(f.value.contact.lastname);
    console.log(f.value.comment);
 
  }


}
