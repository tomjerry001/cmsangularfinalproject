import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;  // FormGroup to manage the registration form
  isSubmitted = false;      // Flag to check if form is submitted
  error: string | null = null; // Variable to store error messages

  constructor(private fb: FormBuilder) {
    // Initializing the form with FormBuilder
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]], // Username field with validations
      password: ['', [Validators.required, Validators.minLength(6)]], // Password field with validations
      confirmPassword: ['', Validators.required]                       // Confirm password field
    }, { validators: this.passwordMatchValidator });                   // Custom validator for password match
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  get formControls() {
    return this.registerForm.controls; // Getter for form controls
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { match: true };
  }

  // Method to handle user registration
  registerUser() {
    this.isSubmitted = true; // Set the submission flag to true

    // If form is invalid, exit early
    if (this.registerForm.invalid) {
      return;
    }

    // If registration is successful
    console.log('Registration successful', this.registerForm.value);
    // Perform your registration logic here (e.g., API call)
    
    // Reset the form after successful registration (optional)
    this.registerForm.reset();
    this.isSubmitted = false; // Reset submission flag
  }
}