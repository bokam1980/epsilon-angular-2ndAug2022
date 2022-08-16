import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResponseModel } from '../../../../models/responseModel.model';
import { IAuthService } from '../../../../models/authservice-interface.model';
import { User } from '../../../../models/user.model';
import { AUTH_SERVICE, RETURN_URL, TOKEN_SERVICE } from '../../../../utils/appconstants';
import { validatePassword } from '../../validators/passwordValidator';
import { ITokenService } from 'src/models/tokenservice-interface.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription?: Subscription;
  private returnUrl?: string;
  loginFrm?: FormGroup;
  constructor(
    private builder: FormBuilder,
    @Inject(AUTH_SERVICE) private authSvcRef: IAuthService<User>,
    @Inject(TOKEN_SERVICE) private tokenSvcRef: ITokenService,
    private router: Router,
    private route: ActivatedRoute) {
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
    this.returnUrl = this.route.snapshot.queryParams[RETURN_URL]
  }

  submitUser() {
    this.subscription =
      this.authSvcRef
        .authenticateUser<string>(<User>this.loginFrm?.value)
        .subscribe({
          next: (resp: ResponseModel<string>) => {
            alert(resp.message)
            if (resp.data !== null) {
              this.tokenSvcRef.saveToken(resp.data)
              if (this.returnUrl) {
                this.router.navigate([this.returnUrl])
              } else {
                this.router.navigate(['/products'])
              }
            }
          },
          error: (err) => {
            console.log(err)
          }
        })
  }
}
