import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AUTH_URL, AUTH_URL_VALUE, PRODUCT_SERVICE, PRODUCT_URL, PRODUCT_URL_VALUE, SERVICE_CLASS_NAME } from '../../utils/appconstants';
import { HttpClientModule } from '@angular/common/http';
import { ProductEntryFormComponent } from './components/product-entry-form/product-entry-form.component';
import { ProductUpdateFormComponent } from './components/product-update-form/product-update-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StarComponent } from '../common/components/star/star.component';
import { ProductRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductComponent,
    ProductFilterPipe,
    StarComponent,
    ProductEntryFormComponent,
    ProductUpdateFormComponent,
    ProductDetailComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, ProductRoutingModule
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
