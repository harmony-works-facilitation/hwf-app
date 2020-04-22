import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacilitationResourcesComponent } from './facilitation-resources.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: FacilitationResourcesComponent,
    },
  ])],
  exports: [RouterModule],
})
export class FacilitationResourcesRoutingModule {}
