import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavberComponent } from './components/navber/navber.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AuthenticationModule } from './authentication/authentication.module';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { SharedModule } from './core/shared/shared/shared.module';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
import {initializeApp,provideFirebaseApp} from '@angular/fire/app'
import { environment } from 'src/environments/environment.prod';
import { provideAuth,getAuth,Auth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavberComponent,
    FooterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
    SharedModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
