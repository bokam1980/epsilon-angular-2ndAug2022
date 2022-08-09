import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IServiceContract } from "src/models/IServiceContract.model";
import { Product } from "src/models/product.model";
import { HttpClient } from "@angular/common/http";


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
    get(id: number): Product | null {
        return null
    }
    getAll(): Product[] {
        return []
    }

}