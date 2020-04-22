import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '@hwfSite/site.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: 'site',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HeaderComponent, // Shared header component
        outlet: 'header',
      },
      {
        path: 'home',
        loadChildren: () => import('@hwfSitePages/home/home.module').then(m => m.HomeModule),
        outlet: 'pages',
      },
      {
        path: 'gallery',
        loadChildren: () => import('@hwfSitePages/gallery/gallery.module').then(m => m.GalleryModule),
        outlet: 'pages',
      },
      {
        path: 'about-us',
        loadChildren: () => import('@hwfSitePages/about-us/about-us.module').then(m => m.AboutUsModule),
        outlet: 'pages',
      },
      {
        path: 'community-connections',
        loadChildren: () => import('@hwfSitePages/community-connections/community-connections.module').then(m => m.CommunityConnectionsModule),
        outlet: 'pages',
      },
      {
        path: 'facilitation-resources',
        loadChildren: () => import('@hwfSitePages/facilitation-resources/facilitation-resources.module').then(m => m.FacilitationResourcesModule),
        outlet: 'pages',
      },
      {
        path: 'updates',
        loadChildren: () => import('@hwfSitePages/updates/updates.module').then(m => m.UpdatesModule),
        outlet: 'pages',
      },
    ]
  },
  {
    path: 'site/home',
    pathMatch: 'full',
    redirectTo: '/site/(pages:home)',
  },
  {
    path: 'site/gallery',
    pathMatch: 'full',
    redirectTo: '/site/(pages:gallery)',
  },
  {
    path: 'site/about-us',
    pathMatch: 'full',
    redirectTo: '/site/(pages:about-us)',
  },
  {
    path: 'site/community-connections',
    pathMatch: 'full',
    redirectTo: '/site/(pages:community-connections)',
  },
  {
    path: 'site/facilitation-resources',
    pathMatch: 'full',
    redirectTo: '/site/(pages:facilitation-resources)',
  },
  {
    path: 'site/updates',
    pathMatch: 'full',
    redirectTo: '/site/(pages:updates)',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/site/(pages:home)',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class SiteRoutingModule {}
