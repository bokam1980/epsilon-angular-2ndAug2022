import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTH_URL } from 'src/utils/appconstants';
import { IAuthService } from 'src/models/authservice-interface.model';
import { User } from 'src/models/user.model';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/models/responseModel.model';

@Injectable()
export class AuthService implements IAuthService<User> {
    constructor(
        private httpClient: HttpClient,
        @Inject(AUTH_URL) private authUrl: string
    ) { }

    authenticateUser<TResponse>(user: User): Observable<ResponseModel<TResponse>> {
        return this.httpClient.post<ResponseModel<TResponse>>(`${this.authUrl}/authenticate`, user)
    }

    regsiterUser<TResponse>(user: User): Observable<ResponseModel<TResponse>> {
        return this.httpClient.post<ResponseModel<TResponse>>(`${this.authUrl}/register`, user)
    }

}