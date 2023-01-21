import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(100)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[#$@!%&?])[A-Za-z\d#$@!%&?]{8,30}$/)]),
  })
  errorMessage: string = ''
  onLoading: boolean = false
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  submitForm(registerForm: FormGroup) {
    this.onLoading = true
    if (registerForm.valid) {
      this._AuthService.signUp(registerForm.value).subscribe({
        next: (data) => {
          if (data.message === 'success') {
            this.onLoading = false
            this._Router.navigate(['/login'])
          }
          else {
            this.onLoading = false
            this.errorMessage = data.message
          }
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
