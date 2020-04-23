import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { AboutUsResolver } from '@hwfKentico/resolvers/about-us.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AboutUsComponent,
      resolve: {
        content: AboutUsResolver
      }
    },
  ])],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
