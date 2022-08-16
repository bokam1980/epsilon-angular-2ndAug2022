import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './common/components/home/home.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { INTERCEPTOR_SERVICE, INTERCEPTOR_SERVICE_CLASS_NAME, TOKEN_SERVICE, TOKEN_SERVICE_CLASS_NAME, AUTH_SERVICE, AUTH_SERVICE_CLASS_NAME, AUTH_URL, AUTH_URL_VALUE } from 'src/utils/appconstants';
import { AuthGuard } from './services/gurad/auth.guard';

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
  bootstrap: [AppComponent],
  providers: [
    {
      provide: TOKEN_SERVICE,
      useClass: TOKEN_SERVICE_CLASS_NAME
    },
    {
      provide: INTERCEPTOR_SERVICE,
      useClass: INTERCEPTOR_SERVICE_CLASS_NAME,
      multi: true
    },
    AuthGuard
  ]
})
export class AppModule { }
