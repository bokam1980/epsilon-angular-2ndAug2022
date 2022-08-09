import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/models/product.model";

//@Injectable()
@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    constructor() { }
    transform(value: Product[], ...args: string[]) {
        // const results: Product[] = []
        // if (value && value.length > 0 && args && args[0] !== '') {
        //     for (let i = 0; i < value.length; i++) {
        //         const p = value[i]
        //         if (p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1) {
        //             results.push(p)
        //         }
        //     }
        //     return results
        // } else
        //     return value

        return value && value.length > 0 && args && args[0] !== '' ?
            value.filter(
                function (p: Product) {
                    return p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1
                }
            ) : value;
    }
}