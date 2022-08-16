import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenService } from 'src/models/tokenservice-interface.model';
import { TOKEN_SERVICE } from 'src/utils/appconstants';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(@Inject(TOKEN_SERVICE) private tokenSvcRef: ITokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //code
        const token = this.tokenSvcRef.fetchToken()
        const authorizationHeader = `Bearer ${token}`
        const tokenizedRequest = req.clone({
            setHeaders: {
                Authorization: authorizationHeader
            }
        })
        //console.log(tokenizedRequest)
        return next.handle(tokenizedRequest)
    }
}