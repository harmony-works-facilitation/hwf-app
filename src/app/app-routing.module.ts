import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'site/home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('@hwfSite/site.module').then(m => m.SiteModule),
  },
  {
    path: '**',
    redirectTo: 'site/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
