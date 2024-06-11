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
import { SharedModule } from '../../shared/module/shared.module';

/**
 * Components imports section 
 */
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DefaultComponent
  ]
})
export class LayoutModule { }
