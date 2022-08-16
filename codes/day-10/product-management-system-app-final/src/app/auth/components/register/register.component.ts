import { Component, OnInit } from '@angular/core';
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
  }
}
