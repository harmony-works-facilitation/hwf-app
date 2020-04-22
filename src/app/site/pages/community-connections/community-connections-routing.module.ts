import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommunityConnectionsComponent } from './community-connections.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CommunityConnectionsComponent,
    },
  ])],
  exports: [RouterModule],
})
export class CommunityConnectionsRoutingModule {}
