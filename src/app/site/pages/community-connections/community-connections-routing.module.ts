import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommunityConnectionsComponent } from './community-connections.component';
import { CommunityConnectionsResolver } from '@hwfKentico/resolvers/community-connections.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CommunityConnectionsComponent,
      resolve: {
        content: CommunityConnectionsResolver,
      }
    },
  ])],
  exports: [RouterModule],
})
export class CommunityConnectionsRoutingModule {}
