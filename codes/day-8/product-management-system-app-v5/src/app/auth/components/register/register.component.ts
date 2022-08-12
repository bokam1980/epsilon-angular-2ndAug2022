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


  //1. passing individual ngModel objects from UI
  // submitUser(uname: NgModel, pwd: NgModel) {
  //   console.log(uname)
  //   console.log(pwd)
  // }

  //2.   passing individual FormControl objects from UI

  // submitUser(uname: FormControl, pwd: FormControl) {
  //   console.log(uname)
  //   console.log(pwd)
  // }

  //3. passing entire NgForm object from UI

  // submitUser(frm: NgForm) {
  //   console.log(frm.controls)
  //   console.log(frm.errors)
  // }

  //4. passing entire FromGroup object from UI
  submitUser(frm: FormGroup) {
    console.log(frm.controls)
    console.log(frm.errors)
  }


  // updateUsername(newName: any) {
  //   console.log(newName)
  //   console.log(newName.value)
  //   this.username = newName.value
  // }
}
