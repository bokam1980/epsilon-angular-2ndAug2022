import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
//import { ProductService } from './products/services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductsModule
  ],
  //providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
