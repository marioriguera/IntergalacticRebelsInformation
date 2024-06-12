/**
 * Angular imports section.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Third party section.
 */

/**
 * Application imports section
 */
import { SharedModule } from '../../shared/module/shared.module';

/**
 * Components imports section
 */
import { ManagerSecurityComponent } from '../security/components/manager.security/manager.security.component';
import { LoginComponent } from '../security/components/login/login.component';
import { LogoutComponent } from '../security/components/logout/logout.component';
import { CoreRoutingModule } from '../core-routing/core-routing.module';



@NgModule({
  declarations: [
    ManagerSecurityComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
