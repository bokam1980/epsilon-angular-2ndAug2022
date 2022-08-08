import { Product } from "src/models/product.model";
import { products } from "src/repository/productRepository";

export class ProductService {
    constructor() {

    }
    getProducts(): Product[] {
        return [...products];
        //return []
    }
    getProduct(id: number) {
        const found = products.find(p => p.productId === id)
        if (found) {
            return { ...found }
        } else
            return null
    }
    updateProduct(updated: Product) {

    }
    deleteProduct(id: number) {

    }
    addProduct(product: Product) {

    }
}