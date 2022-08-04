import { Component } from "@angular/core";

@Component({
    selector: 'app-welcome',
    template: `   
      <app-some></app-some>
    `
})
export class AppComponent {
    constructor() {
        console.log('[App] component created')
    }
}