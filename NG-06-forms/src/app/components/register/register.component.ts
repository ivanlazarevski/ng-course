import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,}).*$')]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
  })

  registerUser() {
    console.log(this.registerForm.value);
  }
}
