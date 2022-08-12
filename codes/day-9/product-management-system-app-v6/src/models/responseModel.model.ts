// import { Product } from "./product.model";
// import { User } from "./user.model";

export interface ResponseModel<TModel> {
    message: string;
    data: TModel | null
}