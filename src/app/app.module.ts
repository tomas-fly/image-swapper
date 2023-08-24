import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ImageSwapperComponent } from './image-swapper/image-swapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSwapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [
  //   AppComponent
  // ],
  entryComponents: [
    ImageSwapperComponent
  ],
})
export class AppModule {
  constructor(
    private injector: Injector
  ) { }

  ngDoBootstrap() {
    customElements.define('image-swapper', createCustomElement(ImageSwapperComponent, {
      injector: this.injector
    }));
  }
}
