import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductEntryFormComponent } from "./components/product-entry-form/product-entry-form.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductUpdateFormComponent } from "./components/product-update-form/product-update-form.component";

// const productRoutes: Routes = [
//     {
//         path: 'products',
//         component: ProductListComponent
//     },
//     {
//         path: 'products/view/:id',
//         component: ProductDetailComponent
//     },
//     {
//         path: 'products/update/:id',
//         component: ProductUpdateFormComponent
//     },
//     {
//         path: 'products/add',
//         component: ProductEntryFormComponent
//     },
// ]
const productRoutes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                // path: 'view/:id/:name',
                path: 'view/:id',
                component: ProductDetailComponent
            },
            {
                path: 'update/:id',
                component: ProductUpdateFormComponent
            },
            {
                path: 'add',
                component: ProductEntryFormComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {

}