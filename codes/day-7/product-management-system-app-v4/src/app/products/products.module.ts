import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from '../common/star/star.component';
import { AUTH_URL, AUTH_URL_VALUE, PRODUCT_SERVICE, PRODUCT_URL, PRODUCT_URL_VALUE, SERVICE_CLASS_NAME } from '../../utils/appconstants';
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
      useClass: SERVICE_CLASS_NAME
    },
    {
      provide: PRODUCT_URL,
      useValue: PRODUCT_URL_VALUE
    },
    {
      provide: AUTH_URL,
      useValue: AUTH_URL_VALUE
    }
  ]
})
export class ProductsModule { }
