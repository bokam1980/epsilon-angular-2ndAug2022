import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ITokenService } from 'src/models/tokenservice-interface.model';
import { TOKEN_SERVICE } from 'src/utils/appconstants';

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(@Inject(TOKEN_SERVICE) private tokenSvc: ITokenService, private router: Router) { }

    //private returnUrl = RETURN_URL
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        const status = this.tokenSvc.isLoggedIn()
        if (status)
            return true
        else {
            this.router.navigate(
                ['/login'],
                {
                    queryParams: {
                        returnUrl: state.url
                    }
                }
            )
            return false
        }
    }

}