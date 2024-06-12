import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {
  // signupForm: FormGroup;

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.signupForm = this.fb.group({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //     lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //     password: new FormControl(
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(8),
  //         Validators.maxLength(16),
  //         Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/),
  //       ],
  //     ),
  //   });
  // }
  // onSubmit() {
  //   // Save user credentials to localStorage
    // localStorage.setItem('user', JSON.stringify(this.signupForm.value));
    // this.router.navigate(['login']);
  // }
  signupForm: FormGroup; // Declare but do not initialize
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder,private router:Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), 
        this.passwordValidator.bind(this)]]    });
  }


  // passwordValidator(control: any) {
  //   const value: string = control.value;

  //   // Check for at least one digit
  //   const digitRegex = /\d/;
  //   const containsDigit = digitRegex.test(value);

  //   // Check for at least one alphabet character
  //   const alphaRegex = /[a-zA-Z]/;
  //   const containsAlpha = alphaRegex.test(value);

  //   // Check for at least one special character
  //   const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  //   const containsSpecial = specialRegex.test(value);

  //   // Return null if all conditions are met, otherwise return an object with error key-value pairs
  //   return !containsDigit || !containsAlpha || !containsSpecial ? { invalidPassword: true } : null;
  // }
  passwordValidator(control: any) {
    if (!control.value) {
      return null;
    }
    const hasNumber = /\d/.test(control.value);
    const hasUppercase = /[A-Z]/.test(control.value);
    const hasLowercase = /[a-z]/.test(control.value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);

    const isValid = hasNumber && hasUppercase && hasLowercase && hasSpecialChar;

    return isValid ? null : { 'invalidPassword': true };
  }




  ngOnInit(): void {
    // You can optionally move the form initialization logic to ngOnInit
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Perform submission logic here
      console.log(this.signupForm.value);
      localStorage.setItem('user', JSON.stringify(this.signupForm.value));
    this.router.navigate(['login']);

    } else {
      // Handle invalid form
      // Maybe show some error messages or prevent submission
    }
  }
  
  
}