import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacilitationResourcesComponent } from './facilitation-resources.component';
import { FacilitationResourcesResolver } from '@hwfKentico/resolvers/facilitation-resources.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: FacilitationResourcesComponent,
      resolve: {
        content: FacilitationResourcesResolver,
      }
    },
  ])],
  exports: [RouterModule],
})
export class FacilitationResourcesRoutingModule {}
