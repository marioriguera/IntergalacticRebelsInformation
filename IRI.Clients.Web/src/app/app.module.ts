/**
 * Angular imports section.
 */
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
