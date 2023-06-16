import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth';
import {Database,set,ref} from '@angular/fire/database'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading=false;
  massError=''
  constructor(
    private _fb: FormBuilder,
    private _Router: Router,
    private auth:Auth,
    private _Database:Database
  ) {}

  hide = true;
  loginForm: FormGroup = this._fb.group({
    name:['',[Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required,Validators.minLength(6)]],
  });

  login(formData: FormGroup): void {
    this.isLoading=true;
    if (formData.valid) {
      createUserWithEmailAndPassword(this.auth,formData.value.email,formData.value.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        set(ref(this._Database,'users/'+user.uid),{
          userName:formData.value.name,
          email:formData.value.email
        })
        this._Router.navigate(['login'])


      })
      .catch((error) => {
        this.isLoading=false;
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        this.massError=errorMessage
      });
// console.log(formData.value);
    }

}
}
