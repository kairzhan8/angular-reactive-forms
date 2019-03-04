import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    username: ['Kair'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      street: [''],
      postalCode: ['']
    })
  });

  // registrationForm = new FormGroup({
  //   username: new FormControl('Kairzhan'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     street: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
}
