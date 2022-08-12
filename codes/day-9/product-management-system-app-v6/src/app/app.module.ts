import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './common/components/home/home.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AuthModule, ProductsModule, AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
