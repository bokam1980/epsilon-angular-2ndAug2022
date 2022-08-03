import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeComponent } from "./components/Welcome.component";
import { ProductsModule } from "./products.module";

@NgModule({
    declarations: [WelcomeComponent],
    imports: [ProductsModule, BrowserModule],
    providers: [],
    bootstrap: [WelcomeComponent]
})
export class RootModule {

}