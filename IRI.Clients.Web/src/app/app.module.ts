/**
 * Angular imports section.
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Third party modules.
 */

/**
 * Application imports section
 */
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layouts/module/layout.module';

/**
 * Components imports section 
 */
import { AppComponent } from './app.component';
import { SharedModule } from './shared/module/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
