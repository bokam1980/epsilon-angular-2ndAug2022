import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ITokenService } from 'src/models/tokenservice-interface.model';
import { TOKEN_SERVICE } from 'src/utils/appconstants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(@Inject(TOKEN_SERVICE) private tokenSvc: ITokenService, private router: Router) { }

  ngOnInit(): void {
  }
  isLogged() {
    return this.tokenSvc.isLoggedIn()
  }
  logout() {
    this.tokenSvc.removeToken()
    this.router.navigate(['/login'])
  }
}
