import { Injectable } from '@angular/core';
import { ITokenService } from 'src/models/tokenservice-interface.model';

@Injectable({ providedIn: 'root' })
export class TokenService implements ITokenService {
    constructor() { }
    saveToken(token: string): void {
        sessionStorage.setItem('token', token)
    }
    fetchToken(): string | null {
        return sessionStorage.getItem('token')
    }
    removeToken(): void {
        sessionStorage.removeItem('token')
    }
    isLoggedIn(): boolean {
        return sessionStorage.getItem('token') ? true : false
    }
}