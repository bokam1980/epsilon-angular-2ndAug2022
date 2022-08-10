import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/models/product.model";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    constructor() { }
    transform(value: Product[], ...args: string[]) {
        return value && value.length > 0 && args && args[0] !== '' ?
            value.filter(
                (p: Product) => p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1) : value;
    }
}