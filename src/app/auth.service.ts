import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('userToken')){
      this.saveUserData()
    }
  }

  userData:any=new BehaviorSubject(null);
  signUp(fromData:object):Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup',fromData)
  }
  
  signIn(fromData:object):Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signin',fromData)
  }

  saveUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken=jwtDecode(encodedToken);
    this.userData.next(decodedToken)
  }

  signOut(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }
}
