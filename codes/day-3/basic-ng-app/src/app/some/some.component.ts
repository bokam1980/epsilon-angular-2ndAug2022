import { Component } from "@angular/core";

@Component({
    selector: 'app-some',
    template: ` <h2>Welcome to Angular</h2>
    <br/><p>Some component</p>`
})
export class SomeComponent {
    constructor() {
        console.log('[Some] component created...')
    }
}