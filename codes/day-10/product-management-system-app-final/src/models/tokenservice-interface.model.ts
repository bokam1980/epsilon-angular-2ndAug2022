export interface ITokenService {
    saveToken(token: string): void;
    fetchToken(): string | null;
    removeToken(): void;
    isLoggedIn(): boolean;
}