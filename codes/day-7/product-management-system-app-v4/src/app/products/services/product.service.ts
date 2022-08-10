import { Inject, Injectable } from "@angular/core";
import { IServiceContract } from "src/models/IServiceContract.model";
import { Product } from "src/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "src/models/responseModel.model";
import { AUTH_URL, PRODUCT_URL } from "src/utils/appconstants";

@Injectable()
export class ProductService implements IServiceContract<number, Product> {

    constructor(private _http: HttpClient, @Inject(AUTH_URL) private authBaseUtl: string, @Inject(PRODUCT_URL) private productBaseUrl: string) {

    }

    getAll(): Observable<ResponseModel<Product[]>> {
        const obsProduct: Observable<ResponseModel<Product[]>> =
            this._http.get<ResponseModel<Product[]>>(this.productBaseUrl)
        return obsProduct
    }
    /*
    get(id: number): Observable<ResponseModel<Product>> {
        throw new Error("Method not implemented.");
    }
    insert(obj: Product): Observable<ResponseModel<Product[]>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<ResponseModel<Product[]>> {
        throw new Error("Method not implemented.");
    }
    update(obj: Product, id: number): Observable<ResponseModel<Product[]>> {
        throw new Error("Method not implemented.");
    }
*/
}