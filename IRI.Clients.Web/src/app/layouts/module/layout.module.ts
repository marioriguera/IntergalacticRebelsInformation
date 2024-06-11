import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DefaultComponent
  ]
})
export class LayoutModule { }
