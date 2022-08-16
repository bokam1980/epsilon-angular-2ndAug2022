import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppPasswordDirective } from './directives/app-password.directive';
import { AUTH_SERVICE, AUTH_SERVICE_CLASS_NAME, AUTH_URL, AUTH_URL_VALUE, TOKEN_SERVICE, TOKEN_SERVICE_CLASS_NAME } from 'src/utils/appconstants';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppPasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [
    {
      provide: AUTH_URL,
      useValue: AUTH_URL_VALUE
    },
    {
      provide: AUTH_SERVICE,
      useClass: AUTH_SERVICE_CLASS_NAME
    },
    // {
    //   provide: TOKEN_SERVICE,
    //   useClass: TOKEN_SERVICE_CLASS_NAME
    // }
  ]
})
export class AuthModule { }
