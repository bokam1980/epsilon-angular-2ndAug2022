import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from '../../validators/passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrm?: FormGroup;
  constructor(private builder: FormBuilder) {
    this.loginFrm = this.builder.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, validatePassword(6, 12)]]
    })
  }

  get username() {
    return this.loginFrm?.get('username')
  }

  get password() {
    return this.loginFrm?.get('password')
  }

  ngOnInit(): void {

  }

  submitUser() {
  }
}
