/**
 * Angular imports section.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PrincipalToolbarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PrincipalToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
