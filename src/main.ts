/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



const bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};
if (typeof window["cordova"] !== "undefined") {
  document.addEventListener(
    "deviceready",
    () => {
      bootstrap();
      console.log("cordova call");
    },
    false
  );
} else {
  bootstrap();
  console.log("cordova else call");
}
