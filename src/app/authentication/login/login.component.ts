import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Auth,signInWithEmailAndPassword} from '@angular/fire/auth';
import {Database,set,ref,update} from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  massError=''
  isLoading=false
  constructor(
    private _fb: FormBuilder,
    private _Router: Router,
    private _AuthService:AuthService,
    private _Auth:Auth,
    private _Database:Database,
    private toastr: ToastrService
  ) {}


  loginForm: FormGroup = this._fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  login(formData: FormGroup): void {
    this.isLoading=true
    if (formData.valid) {
      signInWithEmailAndPassword(this._Auth,formData.value.email,formData.value.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        const date=new Date();
        update(ref(this._Database,'users/'+user.uid),{
          last_login:date
        })
        this.isLoading=false
        user.getIdTokenResult().then((data)=>{
          localStorage.setItem('userToken',data.token);
        });
        this.toastr.success('Success', 'You Login success');
        this._Router.navigate(['/panel/posts/All'])
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.isLoading=false
        this.toastr.warning('Error');
        this.massError=errorMessage
      });
    }

}
}
