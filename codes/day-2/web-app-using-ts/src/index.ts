import { PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RootModule } from "./root.module";

const platform: PlatformRef = platformBrowserDynamic()
platform.bootstrapModule(RootModule)