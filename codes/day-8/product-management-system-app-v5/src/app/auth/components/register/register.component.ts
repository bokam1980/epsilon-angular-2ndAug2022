import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  username = '';
  password = ''
  ngOnInit(): void {
  }

  // submitUser(frm: NgForm) {
  submitUser(frm: FormGroup) {
    console.log(frm.controls)
    console.log(frm.errors)
  }
  // submitUser(uname: NgModel, pwd: NgModel) {
  // submitUser(uname: FormControl, pwd: FormControl) {
  //   console.log(uname)
  //   console.log(pwd)
  // }
  // updateUsername(newName: any) {
  //   console.log(newName)
  //   console.log(newName.value)
  //   this.username = newName.value
  // }
}
