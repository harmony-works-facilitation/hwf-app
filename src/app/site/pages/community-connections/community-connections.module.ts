import { NgModule } from '@angular/core';
import { SharedModule } from '@hwfShared/shared.module';
import { KenticoModule } from '@hwfKentico/kentico.module';
import { CommunityConnectionsComponent } from './community-connections.component';
import { CommunityConnectionsRoutingModule } from './community-connections-routing.module';

@NgModule({
  declarations: [
      CommunityConnectionsComponent,
  ],
  imports: [SharedModule, CommunityConnectionsRoutingModule, KenticoModule],
})
export class CommunityConnectionsModule {}
