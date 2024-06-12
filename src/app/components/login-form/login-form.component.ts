

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onsubmit() {
    if (this.loginForm.valid) {
      let myemail = this.loginForm.value.email;
      let mypassword = this.loginForm.value.password;
  
      let storedUser = localStorage.getItem('user');
      // Successfully logged in, navigate to the next screen

      if (storedUser && JSON.parse(storedUser).password===mypassword && myemail=== JSON.parse(storedUser).email) {
        this.router.navigate(['products']);
      }
      else {
        alert('Invalid Credentials');
        this.router.navigate(['signup']);
      }
    }
  }
}