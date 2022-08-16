import { Observable } from "rxjs";
import { ResponseModel } from "./responseModel.model";

export interface IAuthService<TModel> {
    authenticateUser<TResponse>(user: TModel): Observable<ResponseModel<TResponse>>;
    regsiterUser<TResponse>(user: TModel): Observable<ResponseModel<TResponse>>;
}