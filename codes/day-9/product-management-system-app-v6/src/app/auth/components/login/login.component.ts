import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { passwordValidator, validatePassword } from '../../validators/passwordValidator';
import { validatePassword } from '../../validators/passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //1. creating individual formcontrol instances
  // username: FormControl = new FormControl('',[Validators.required, Validators.email])
  // password: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)])

  //2. creating instance of formgroup with a collection of instances of formcontrol

  // loginFrm: FormGroup = new FormGroup({
  //   username: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('',[Validators.required, Validators.minLength(6)])
  // })


  loginFrm?: FormGroup;
  constructor(private builder: FormBuilder) {
    //3. creating iinstnce or formgroup with a collection of formcotntrols using FormBuilder service
    // this.loginFrm = this.builder.group({
    //   'username': ['', [Validators.required, Validators.email]],
    //   'password': ['', [Validators.required, Validators.minLength(6)]]
    // })
    this.loginFrm = this.builder.group({
      'username': ['', [Validators.required, Validators.email]],
      // 'password': ['', [Validators.required, passwordValidator]]
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
    //let username = this.builder.control('')
    // this.loginFrm = this.builder.group({
    //   username: [''],
    //   password: ['']
    // })
  }

  submitUser() {
    // console.log(this.username.value, this.password.value)
    //console.log(this.loginFrm.value)
    // console.log(this.loginFrm.get('username')?.value)
    // console.log(this.loginFrm.get('password')?.value)
    console.log(this.loginFrm?.controls['username'].value)
    console.log(this.loginFrm?.controls['password'].value)
  }
}
