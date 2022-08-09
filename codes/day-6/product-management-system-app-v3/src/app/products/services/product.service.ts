import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IServiceContract } from "src/models/IServiceContract.model";
import { Product } from "src/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "src/models/responseModel.model";


// @Injectable({
//     //register the service at the root module directly from here.
//     //No need to register again in the providers array of the root module
//     providedIn: "root"
// })

@Injectable()
export class ProductService implements IServiceContract<number, Product> {

    private authBaseUrl = environment.authUrl
    private productBaseUrl = environment.productsUrl

    constructor(private _http: HttpClient) {

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