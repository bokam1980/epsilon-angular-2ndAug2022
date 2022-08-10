import { Observable } from "rxjs";
import { ResponseModel } from "./responseModel.model";

export interface IServiceContract<in TId, TModel> {
    getAll(): Observable<ResponseModel<TModel[]>>;
    // get(id: TId): Observable<ResponseModel<TModel>>;    
    // insert(obj: TModel): Observable<ResponseModel<TModel[]>>;
    // delete(id: TId): Observable<ResponseModel<TModel[]>>;
    // update(obj: TModel, id: TId): Observable<ResponseModel<TModel[]>>;
}