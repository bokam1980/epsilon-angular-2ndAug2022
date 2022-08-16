import { Inject, Injectable } from "@angular/core";
import { IProductService } from "src/models/productservice-interface.model";
import { Product } from "src/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "src/models/responseModel.model";
import { AUTH_URL, PRODUCT_URL } from "src/utils/appconstants";

@Injectable()
export class ProductService implements IProductService<number, Product> {

    constructor(private _http: HttpClient, @Inject(AUTH_URL) private authBaseUtl: string, @Inject(PRODUCT_URL) private productBaseUrl: string) {

    }

    getAll(): Observable<ResponseModel<Product[]>> {
        const obsProduct: Observable<ResponseModel<Product[]>> =
            this._http.get<ResponseModel<Product[]>>(this.productBaseUrl)
        return obsProduct
    }

    get(id: number): Observable<ResponseModel<Product>> {
        const obsProduct: Observable<ResponseModel<Product>> =
            this._http.get<ResponseModel<Product>>(`${this.productBaseUrl}/${id}`)
        return obsProduct
    }

    insert(obj: Product): Observable<ResponseModel<Product[]>> {
        return this._http.post<ResponseModel<Product[]>>(this.productBaseUrl, obj);
    }

    delete(id: number): Observable<ResponseModel<Product[]>> {
        return this._http.delete<ResponseModel<Product[]>>(`${this.productBaseUrl}/${id}`)
    }
    update(obj: Product, id: number): Observable<ResponseModel<Product[]>> {
        return this._http.put<ResponseModel<Product[]>>(`${this.productBaseUrl}/${id}`, obj);
    }

}