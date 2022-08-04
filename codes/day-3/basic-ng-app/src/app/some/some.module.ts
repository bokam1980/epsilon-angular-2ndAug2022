import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SomeComponent } from "./some.component";

@NgModule({
    //where you register components, directives and pipes
    declarations: [SomeComponent],
    //where you register the built-in or your other application modules
    imports: [BrowserModule],
    //where you mention the name of assets from this current module, that you like to expose to other modules
    exports: [SomeComponent],
    //where you register services
    providers: [],
    bootstrap: []
})
export class SomeModule {
    constructor() {
        console.log('[Some] module created')
    }
}