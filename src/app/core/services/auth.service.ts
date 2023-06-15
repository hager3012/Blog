import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
@Injectable({
  providedIn: AuthenticationModule
})
export class AuthService {

  constructor(private _Router:Router) { }
  logOut():void{
    localStorage.removeItem('userToken')
    
  }
}
