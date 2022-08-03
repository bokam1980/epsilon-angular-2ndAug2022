import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
    template: `Products`
})
export class ProductComponent {

}

@NgModule({
    declarations: [ProductComponent],
    imports: [BrowserModule],
    bootstrap: [ProductComponent],
    providers: []
})
export class ProductsModule {

}

