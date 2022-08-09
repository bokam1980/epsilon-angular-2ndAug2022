import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from '../common/star/star.component';
//import { ProductService } from './services/product.service';
import { PRODUCT_SERVICE, SERVICE_CLASS_NAME } from '../../utils/appconstants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductComponent,
    AddProductComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ProductListComponent],
  providers: [
    {
      provide: PRODUCT_SERVICE,
      //useFactory: () => new ProductService()
      //useExisting:new ProductService()
      useClass: SERVICE_CLASS_NAME
    }
  ]
  //providers: [ProductService]
})
export class ProductsModule { }
