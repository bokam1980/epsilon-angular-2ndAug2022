import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAuthService } from 'src/models/authservice-interface.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { AUTH_SERVICE } from 'src/utils/appconstants';
import { User } from "../../../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private subscription?: Subscription;
  constructor(
    @Inject(AUTH_SERVICE) private authSvcRef: IAuthService<User>,
    private router: Router
  ) { }

  userInfo: User = {
    username: '',
    password: ''
  };

  ngOnInit(): void {
  }

  submitUser() {
    this.subscription =
      this.authSvcRef
        .regsiterUser<User>(this.userInfo)
        .subscribe({
          next: (resp: ResponseModel<User>) => {
            alert(resp.message)
            if (resp.data !== null) {
              this.router.navigate(['/login'])
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
  }
}
