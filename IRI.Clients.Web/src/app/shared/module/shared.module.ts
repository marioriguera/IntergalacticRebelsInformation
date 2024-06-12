/**
 * Angular imports section.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Third party modules
*/

/**
 * Application imports section
*/

/**
 * Components imports section 
*/
import { PrincipalToolbarComponent } from '../components/tools_bars/principal-toolbar/principal-toolbar.component';
import { FooterComponent } from '../components/tools_bars/footer/footer.component';

@NgModule({
  declarations: [
    PrincipalToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrincipalToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
