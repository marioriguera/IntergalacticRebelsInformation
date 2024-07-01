import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/views/page-not-found/page-not-found.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

/**
 * Base collection routes.
 */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    data: {
      animation: 'DashboardPage'
    }
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core-routing/core-routing.module').then(m => m.CoreRoutingModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      animation: 'NotFoundPage'
    }
  }
];

/**
 * App routing module class to works like a base of all routes collections of the web site.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledNonBlocking', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.warn(routes);
  }
}
