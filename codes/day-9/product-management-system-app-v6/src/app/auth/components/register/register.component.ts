import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { User } from "../../../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  userInfo: User = {
    username: '',
    password: ''
  };

  ngOnInit(): void {
  }

  submitUser() {
    console.log(this.userInfo)
  }
  // submitUser(frm: NgForm) {
  //   // if (!frm.valid)
  //   //   return;

  //   console.log(frm.value)
  //   console.log(frm.controls)
  // }
}
