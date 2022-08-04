import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SomeModule } from "./some/some.module";

@NgModule({
    //where you register components, directives and pipes
    declarations: [AppComponent],
    //where you register the built-in or your other application modules
    imports: [BrowserModule, SomeModule],
    //where you mention the name of assets from this current module, that you like to expose to other modules
    exports: [],
    //where you register services
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('[App] module created')
    }
}