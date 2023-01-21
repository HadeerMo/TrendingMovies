import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[#$@!%&?])[A-Za-z\d#$@!%&?]{8,30}$/), Validators.required])
  })
errorMessage:string='';
isLoading:boolean=false;
  get f() {
    return this.loginForm.controls;
  }
  constructor(private _AuthService: AuthService, private _Router:Router) { }
  submuLogin(loginForm:FormGroup) {
    this.isLoading=true;
    this._AuthService.signIn(loginForm.value).subscribe({
      next:(data)=>{
        if(data.message==='success'){
          localStorage.setItem('userToken',data.token)
          this._AuthService.saveUserData();
          this.isLoading=false;
          this._Router.navigate(['/home'])
        }
        else{
          this.isLoading=false;
          this.errorMessage=data.message;
        }
      }
    })
  }
  ngOnInit(): void {
  }

}
