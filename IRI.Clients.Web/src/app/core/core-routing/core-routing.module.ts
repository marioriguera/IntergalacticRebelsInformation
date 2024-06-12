import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../../layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: '**',
    component: DefaultComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
