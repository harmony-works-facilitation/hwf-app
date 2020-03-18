import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from '@hwfSite/components/site/site.component';
import { ContentTypesResolver } from '@hwfKentico/resolvers/content-types.resolver';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    resolve: {
      contentTypes: ContentTypesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
